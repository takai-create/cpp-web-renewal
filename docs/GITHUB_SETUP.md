# GitHub 連携ガイド

このドキュメントでは、ローカルプロジェクトを GitHub にプッシュして連携させる手順を説明します。

## 準備

### 1. GitHub リポジトリの作成

1. [GitHub](https://github.com) にログイン
2. 右上の **+** アイコン → **New repository** をクリック
3. リポジトリ設定：
   - **Repository name**: `cpp-web-renewal` または `corporate-site-renewal`
   - **Description**: （オプション）コーポレートサイトリニューアルプロジェクト
   - **Visibility**: Private（プライベート推奨）
   - **.gitignore**: Skip（既にローカルに .gitignore がある）
   - **License**: 必要に応じて選択
4. **Create repository** をクリック

### 2. ローカリポジトリをリモートに接続

リポジトリ作成後、GitHub が表示するコマンドをコピーして実行します：

```bash
# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/cpp-web-renewal.git

# または SSH を使用する場合
git remote add origin git@github.com:YOUR_USERNAME/cpp-web-renewal.git
```

### 3. ブランチをリモートにプッシュ

```bash
# master ブランチをプッシュ
git branch -M main
git push -u origin main

# develop ブランチをプッシュ
git push -u origin develop
```

## GitHub で求められるやること

### コラボレータの設定
1. リポジトリの **Settings** → **Collaborators**
2. チームメンバーを追加

### デフォルトブランチの設定
1. **Settings** → **Branches**
2. **Default branch** を **develop** に設定（開発ブランチ用）

### ブランチ保護ルール（オプション）
1. **Settings** → **Branches**
2. **Add rule**:
   - **Branch name pattern**: `main`
   - ✅ **Require pull request reviews before merging** (1人以上のレビューが必要)
   - ✅ **Require status checks to pass** (CI チェックの成功が必須)
   - ✅ **Require branches to be up to date**

## GitHub Projects でのプロジェクト管理

### プロジェクトボードの作成
1. **Projects** タブをクリック
2. **New project** をクリック
3. テンプレート: **Table** または **Board** を選択
4. タスク/カードを追加

### Issue の管理
1. **Issues** タブ
2. **New issue** で課題を作成
3. ラベル、マイルストーン、アサイニーを設定

## Discussions（チーム内討議）

質問や提案はこちらで行います：

1. **Discussions** タブをクリック
2. **New discussion** で トピックを開始

## CI/CD の設定（GitHub Actions）

既に `.github/workflows/lint.yml` が用意されています。

### ワークフロー実行確認
1. **Actions** タブをクリック
2. コミット時に自動で Lint チェックが実行されます

### 追加可能なワークフロー
- ✅ Lint チェック（既存）
- ⬜ 自動テスト
- ⬜ ビルド確認
- ⬜ デプロイ（検討予定）

## セキュリティとアクセス管理

### SSH キーの設定（推奨）
パスワード入力不要でプッシュできます：

```bash
# SSH キーを生成
ssh-keygen -t ed25519 -C "your_email@example.com"

# 公開キーをコピーして GitHub に登録
cat ~/.ssh/id_ed25519.pub
```

**GitHub 登録手順**: Settings → SSH and GPG keys → New SSH key

## よくある操作

### ローカルの変更をプッシュ
```bash
git checkout develop
git pull origin develop
git checkout -b feature/ISSUE-123-description
# 機能開発...
git add .
git commit -m "feat: 機能説明"
git push origin feature/ISSUE-123-description
```

### GitHub で PR を作成
1. プッシュ後、GitHub で **Compare & pull request** をクリック
2. base: `develop` ← compare: `feature/...` に設定
3. PR テンプレートに沿って説明を入力
4. **Create pull request** をクリック

### リモートブランチから最新を取得
```bash
git fetch origin
git pull origin develop
```

### リモートブランチを削除
```bash
git push origin --delete feature/ISSUE-123-description
```

## トラブルシューティング

### リモートがエラーになる場合
```bash
# リモート接続を確認
git remote -v

# リモートプッシュの前に最新を取得
git pull origin main
git push origin main
```

### SSH/HTTPS の認証エラー
- **HTTPS**: [Personal Access Token](https://github.com/settings/tokens) を生成してパスワードとして使用
- **SSH**: SSH キーが正しく GitHub に登録されているか確認

## 参考リンク
- [GitHub Docs](https://docs.github.com/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
