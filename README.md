# コーポレートサイト リニューアルプロジェクト

## プロジェクト概要
このプロジェクトは、コーポレートサイト全体のリニューアルを目的としています。
Next.js + React + TypeScript を使用した最新のウェブサイトです。

## 技術スタック
- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: CSS/Tailwind CSS（検討中）
- **パッケージマネージャー**: npm

## プロジェクト構成

```
cpp_web_ren/
├── app/              # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト
│   └── page.tsx      # ホームページ
├── components/       # 再利用可能なコンポーネント
├── public/          # 静的アセット（画像、フォントなど）
├── styles/          # グローバルスタイル
├── lib/             # ユーティリティ関数
├── types/           # TypeScript型定義
├── docs/            # ドキュメント
└── .github/         # GitHub設定
```

## セットアップ手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスします。

### 3. ビルド
```bash
npm run build
npm start
```

## ブランチ戦略
- `main` - 本番環境
- `develop` - 開発チーム向けメインブランチ
- `feature/*` - 機能開発用
- `bugfix/*` - バグ修正用
- `release/*` - リリース準備用

## 構成検討項目

### ページ構成
- [ ] ホーム
- [ ] 会社概要
- [ ] サービス内容
- [ ] 実績・事例
- [ ] ブログ/ニュース
- [ ] お問い合わせ
- [ ] プライバシーポリシー
- [ ] 利用規約

### 機能要件
- [ ] レスポンシブデザイン
- [ ] SEO対応
- [ ] パフォーマンス最適化
- [ ] アクセシビリティ対応
- [ ] OGP/メタデータ管理

### デザイン
- [ ] ブランドカラー定義
- [ ] フォント選定
- [ ] コンポーネントライブラリ

## 開発フロー
1. Issueで要件を定義
2. Discussionで検討
3. featureブランチで開発
4. Pull Requestでレビュー
5. developブランチへパール
6. 定期的にmainへマージ

## GitHub連携
- GitHub Projectsでプロジェクト管理
- Issueテンプレート使用
- PR テンプレート使用
- GitHub Actions での自動テスト・デプロイ（検討中）

## ドキュメント
詳細は `docs/` ディレクトリを参照してください。

## ライセンス
（設定予定）
