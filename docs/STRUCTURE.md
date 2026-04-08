# プロジェクト構成ドキュメント

## ディレクトリ構成

### `/app`
Next.js App Router を使用したページとレイアウト

```
app/
├── layout.tsx          # ルートレイアウト（全ページ共通）
├── page.tsx            # ホームページ
├── (pages)/           # ページグループ（オプション）
│   ├── about/        # 会社概要
│   ├── services/     # サービス
│   ├── works/        # 実績
│   ├── blog/         # ブログ
│   ├── contact/      # 問い合わせ
│   └── legal/        # 法的情報
└── api/               # API ルート（検討中）
```

### `/components`
再利用可能なReactコンポーネント

```
components/
├── common/            # 全ページで使用
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Breadcrumb.tsx
├── sections/          # ページセクション
│   ├── HeroSection.tsx
│   ├── FeatureSection.tsx
│   └── CallToAction.tsx
├── ui/               # UI部品
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── Form.tsx
└── layout/           # レイアウト用
    ├── Container.tsx
    └── Grid.tsx
```

### `/public`
静的アセット（変更されないファイル）

```
public/
├── images/
│   ├── logo.png
│   ├── hero/
│   ├── services/
│   └── works/
├── icons/
├── fonts/
└── favicon.ico
```

### `/styles`
CSS / スタイル定義

```
styles/
├── globals.css       # グローバルスタイル
├── variables.css    # CSS変数
└── (検討中: Tailwind CSS設定)
```

### `/lib`
ユーティリティ関数とヘルパー

```
lib/
├── utils.ts         # 汎用ユーティリティ
├── constants.ts     # 定数
├── api.ts           # API通信関数
└── seo.ts           # SEO関連
```

### `/types`
TypeScript 型定義

```
types/
├── index.ts        # 共通型
├── api.ts         # API型
├── page.ts        # ページ型
└── entities.ts    # ドメインモデル
```

### `/.github`
GitHub関連設定

```
.github/
├── workflows/       # GitHub Actions
│   ├── ci.yml
│   ├── deploy.yml
│   └── lint.yml
├── ISSUE_TEMPLATE/  # Issue テンプレート
├── PULL_REQUEST_TEMPLATE.md
└── dependabot.yml  # Dependabot設定
```

### `/docs`
プロジェクトドキュメント

```
docs/
├── STRUCTURE.md        # このファイル
├── DEVELOPMENT.md      # 開発ガイド
├── DESIGN.md          # デザインガイドライン
├── API.md             # API仕様
├── DEPLOYMENT.md      # デプロイ手順
└── TROUBLESHOOTING.md # トラブルシューティング
```

## 命名規則

### ファイル名
- コンポーネント: PascalCase (e.g., `Header.tsx`, `UserCard.tsx`)
- ユーティリティ: camelCase (e.g., `formatDate.ts`, `parseJson.ts`)
- スタイル: kebab-case (e.g., `global.css`, `header-styles.css`)

### ディレクトリ名
- kebab-case (e.g., `components`, `public`, `lib`)

### 変数・関数
- 定数: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`, `API_URL`)
- 変数/関数: camelCase (e.g., `userData`, `handleClick()`)

## ファイル作成チェックリスト

### 新規ページ追加時
- [ ] ページコンポーネント (`app/[page]/page.tsx`)
- [ ] メタデータ設定
- [ ] 必要なコンポーネント作成
- [ ] スタイル調整
- [ ] SEO対応（OGP、メタディスクリプション等）

### 新規コンポーネント作成時
- [ ] コンポーネントファイル
- [ ] スタイルモジュール（必要に応じて）
- [ ] TypeScript型定義
- [ ] ドキュメント/使用例

## デプロイ対応ポイント

- [ ] ビルドの成功確認
- [ ] 環境変数設定
- [ ] 画像最適化確認
- [ ] パフォーマンス計測
- [ ] SEO チェック

