# お問い合わせフォーム 接続手順

## 概要

現在のお問い合わせフォーム (`/contact`) は **Formspree** にPOSTする前提で実装されています。
`data/content.json` の `contactPage.formAction` に Formspree のエンドポイントURLを入れるだけで本番稼働します。

## 設定手順

### 1. Formspree アカウント作成

1. https://formspree.io/ にアクセス
2. 「Get Started」→ サインアップ（メール or GoogleでもOK）
3. 無料プラン: 月50通まで、スパム対策内蔵、reCAPTCHA不要

### 2. 新規フォーム作成

1. ダッシュボード → 「**+ New Form**」
2. 入力項目:
   - **Form Name**: `CPP コーポレートサイト お問い合わせ`
   - **Send Emails To**: 受信したいメールアドレス（複数可）
3. 「Create Form」
4. 表示される **エンドポイントURL** をコピー
   - 形式: `https://formspree.io/f/xxxxxxxxxxxx`

### 3. content.json に設定

`data/content.json` を開き、`contactPage.formAction` に貼り付け:

```json
"contactPage": {
  ...
  "formAction": "https://formspree.io/f/xxxxxxxxxxxx",
  ...
}
```

### 4. 動作確認

1. `npm run dev`
2. http://localhost:3001/contact にアクセス
3. フォームに入力して送信
4. 初回送信時 Formspree から確認メールが届くので承認
5. 承認後は以降のメールがすべて届く

## フォームで取得される項目

| 項目名（name属性） | 表示ラベル | 必須 |
|----------------|---------|------|
| name | お名前 | ✅ |
| company | 会社名・所属組織 | - |
| url | ウェブサイトURL | - |
| email | メールアドレス | ✅ |
| tel | 電話番号 | - |
| type | お問い合わせ種別（value） | ✅ |
| typeLabel | お問い合わせ種別（日本語） | 自動 |
| message | お問い合わせ内容 | ✅ |
| privacy | プライバシーポリシー同意 | ✅ |
| website | （ハニーポット・スパム対策用） | - |

## スパム対策

実装済みのスパム対策:

1. **ハニーポット**
   - `website` という隠しフィールドを設置
   - 人間には見えないが bot は機械的に入力
   - Formspree の `_gotcha` 機能と同じ考え方

2. **Formspreeの内蔵スパム対策**
   - Akismet によるスパムフィルタが自動適用
   - reCAPTCHA 追加実装は不要

3. **プライバシーポリシー同意チェック**
   - ブラウザ標準バリデーションで空送信を防ぐ

## エラー時の挙動

- **送信失敗時**: エラーメッセージを表示し、再入力不要でリトライ可能
- **ネットワークエラー時**: 詳細メッセージを表示
- **バリデーションエラー時**: Formspreeからのエラーをそのまま表示

## 送信後

- 成功時: 「送信完了」メッセージ画面に切り替え
- フォームはリセットされる
- トップページへ戻るリンクを表示

## Formspree 以外のサービスを使う場合

### Web3Forms の場合

Web3Forms (https://web3forms.com/) も同じPOST形式で使えます。
- content.json の `formAction` に Web3Forms のエンドポイントを入れるだけ
- name フィールドは `access_key` を追加する必要あり（フォームのhidden input）

### Googleフォーム（iframe埋め込み）に切り替える場合

独自のフォームではなく Google フォームを埋め込む形に変更する場合は、
`app/contact/page.tsx` を書き換えて `<iframe>` ベースにします。
※ デザインが統一されないため、非推奨

## 設定が空のとき

`formAction` が空の場合、送信ボタンを押すと「準備中」アラートを表示します。
開発中や本番公開前はこの状態でOKです。
