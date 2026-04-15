/**
 * Crowd Power Partners お問い合わせフォーム受信 GAS
 *
 * 機能:
 *   1. コーポレートサイトのフォームから POST を受信
 *   2. Googleスプレッドシートに1行追記
 *   3. 指定メールアドレスに通知メール送信
 *   4. 送信者への自動返信メール送信
 *
 * セットアップ:
 *   1. このスクリプトを Google Apps Script にコピー
 *   2. 下の CONFIG を編集
 *   3. 「デプロイ」→「新しいデプロイ」→「種類: ウェブアプリ」
 *      - 次のユーザーとして実行: 自分
 *      - アクセスできるユーザー: 全員
 *   4. 表示されたウェブアプリURL を data/content.json の formAction に貼る
 */

// ============================================
// 設定（ここを編集）
// ============================================
const CONFIG = {
  // 通知メール送信先（お問い合わせを受信するメールアドレス）
  NOTIFY_EMAIL: "takai@crowdpower-partners.com",

  // 通知メールの差出人名
  FROM_NAME: "Crowd Power Partners Website",

  // スプレッドシートID（任意。空ならコンテナバインドのスプレッドシートを使用）
  // URLの /d/XXXXXX/edit の XXXXXX 部分
  SPREADSHEET_ID: "",

  // シート名
  SHEET_NAME: "お問い合わせ",

  // 自動返信を有効化するか
  SEND_AUTO_REPLY: true,

  // 自動返信メールの差出人名
  REPLY_FROM_NAME: "Crowd Power Partners",

  // 自動返信メールの件名
  REPLY_SUBJECT: "【Crowd Power Partners】お問い合わせを受け付けました",
};

// ============================================
// エンドポイント
// ============================================

/**
 * POST リクエスト（フォーム送信）
 */
function doPost(e) {
  try {
    const params = e.parameter || {};

    // ハニーポットチェック（bot対策）
    if (params.website) {
      // botと判定、何もせず成功を返す
      return jsonResponse({ ok: true, skipped: true });
    }

    // バリデーション
    if (!params.name || !params.email || !params.message) {
      return jsonResponse({
        ok: false,
        error: "必須項目が入力されていません",
      });
    }

    // スプレッドシートに保存
    saveToSheet(params);

    // 通知メール送信（管理者宛）
    sendNotificationEmail(params);

    // 自動返信メール送信（送信者宛）
    if (CONFIG.SEND_AUTO_REPLY) {
      sendAutoReply(params);
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse({ ok: false, error: String(err) });
  }
}

/**
 * GET リクエスト（動作確認用）
 */
function doGet() {
  return jsonResponse({
    ok: true,
    service: "CPP Contact Form Endpoint",
    version: "1.0",
  });
}

// ============================================
// スプレッドシート保存
// ============================================
function saveToSheet(params) {
  let ss;
  if (CONFIG.SPREADSHEET_ID) {
    ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  } else {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }

  if (!ss) {
    throw new Error(
      "スプレッドシートが見つかりません。SPREADSHEET_ID を設定するか、コンテナバインドで実行してください。"
    );
  }

  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  // ヘッダー行がなければ作成
  if (sheet.getLastRow() === 0) {
    const headers = [
      "受信日時",
      "お名前",
      "会社名・所属",
      "URL",
      "メール",
      "電話",
      "種別",
      "種別コード",
      "本文",
      "同意",
    ];
    sheet.appendRow(headers);
    sheet
      .getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#004ea2")
      .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    params.name || "",
    params.company || "",
    params.url || "",
    params.email || "",
    params.tel || "",
    params.typeLabel || params.type || "",
    params.type || "",
    params.message || "",
    params.privacy ? "○" : "",
  ]);

  // 列幅自動調整
  sheet.autoResizeColumns(1, 10);
}

// ============================================
// 通知メール（管理者宛）
// ============================================
function sendNotificationEmail(params) {
  const subject = `【CPPサイト】${
    params.typeLabel || "お問い合わせ"
  } / ${params.name || "匿名"}`;

  const body = [
    "Crowd Power Partners サイトからお問い合わせを受信しました。",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    `■ 種別    : ${params.typeLabel || params.type || "（未選択）"}`,
    `■ お名前   : ${params.name || ""}`,
    `■ 会社名   : ${params.company || "（未入力）"}`,
    `■ URL     : ${params.url || "（未入力）"}`,
    `■ メール   : ${params.email || ""}`,
    `■ 電話    : ${params.tel || "（未入力）"}`,
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "■ 本文",
    "───────────────",
    params.message || "",
    "───────────────",
    "",
    `受信日時: ${formatDate(new Date())}`,
    "",
    "※ このメールは自動送信されています。",
    "※ スプレッドシートにも同内容が記録されています。",
  ].join("\n");

  MailApp.sendEmail({
    to: CONFIG.NOTIFY_EMAIL,
    subject: subject,
    body: body,
    name: CONFIG.FROM_NAME,
    replyTo: params.email || CONFIG.NOTIFY_EMAIL,
  });
}

// ============================================
// 自動返信メール（送信者宛）
// ============================================
function sendAutoReply(params) {
  if (!params.email) return;

  const body = [
    `${params.name || "お客様"} 様`,
    "",
    "Crowd Power Partners へのお問い合わせ、誠にありがとうございます。",
    "以下の内容で受け付けいたしました。",
    "担当者より改めてご連絡させていただきます。",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    `■ 種別    : ${params.typeLabel || params.type || ""}`,
    `■ お名前   : ${params.name || ""}`,
    `■ 会社名   : ${params.company || ""}`,
    `■ メール   : ${params.email || ""}`,
    "",
    "■ お問い合わせ内容",
    "───────────────",
    params.message || "",
    "───────────────",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "内容により、ご回答までお時間をいただく場合がございます。",
    "3営業日以内にご連絡がない場合はお手数ですが再度ご連絡ください。",
    "",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "Crowd Power Partners株式会社",
    "〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館6階",
    "〒950-0901 新潟県新潟市中央区弁天2-1-1 弁天ビル5F",
    "https://crowdpower-partners.com",
    "━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "※ このメールは自動送信されています。ご返信いただいても対応できません。",
  ].join("\n");

  MailApp.sendEmail({
    to: params.email,
    subject: CONFIG.REPLY_SUBJECT,
    body: body,
    name: CONFIG.REPLY_FROM_NAME,
    replyTo: CONFIG.NOTIFY_EMAIL,
  });
}

// ============================================
// ヘルパー
// ============================================
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function formatDate(date) {
  return Utilities.formatDate(date, "Asia/Tokyo", "yyyy-MM-dd HH:mm:ss");
}

// ============================================
// テスト用（GASエディタで手動実行）
// ============================================
function testSave() {
  const testParams = {
    name: "テスト太郎",
    email: "test@example.com",
    company: "テスト株式会社",
    url: "https://example.com",
    tel: "03-1234-5678",
    type: "business",
    typeLabel: "事業について相談する",
    message: "これはテスト送信です。",
    privacy: "on",
  };
  saveToSheet(testParams);
  sendNotificationEmail(testParams);
  console.log("テスト実行完了");
}
