# 開発ガイド

## 開発環境セットアップ

### 必須要件
- Node.js 18.17 以上
- npm または yarn

### インストール手順

```bash
# 1. 依存関係をインストール
npm install

# 2. 開発サーバーを起動
npm run dev

# 3. ブラウザで確認
# http://localhost:3000
```

## 開発ワークフロー

### 1. ブランチ作成
```bash
git checkout develop
git pull origin develop
git checkout -b feature/issue-NUMBER-branch-name
```

### 2. 開発
```bash
npm run dev
```

ファイル保存時に自動的に再読込・ホットリロードが実行されます。

### 3. 型チェック
```bash
npm run type-check
```

### 4. Lint チェック
```bash
npm run lint
```

### 5. コミット
```bash
git add .
git commit -m "feat: 機能説明

詳細な説明（必要に応じて）
Closes #NUMBER"
```

**Conventionalコミットメッセージ形式:**
- `feat:` - 新機能
- `fix:` - バグ修正
- `docs:` - ドキュメント変更
- `style:` - コードスタイル（機能変更なし）
- `refactor:` - リファクタリング
- `perf:` - パフォーマンス改善
- `test:` - テスト追加/修正

### 6. プッシュと Pull Request

```bash
git push origin feature/issue-NUMBER-branch-name
```

GitHub で Pull Request を作成し、レビューを依頼します。

## よくある開発タスク

### 新規ページの追加

1. **ページコンポーネントを作成**
```bash
# 例: app/about/page.tsx
```

2. **メタデータを設定**
```typescript
export const metadata: Metadata = {
  title: "ページタイトル",
  description: "ページの説明",
};
```

3. **必要なコンポーネントを配置**

4. **スタイリング**

### コンポーネントの作成

1. **コンポーネントファイルを作成**
```typescript
// components/[category]/[ComponentName].tsx

interface Props {
  // Props型定義
}

export function ComponentName({ }: Props) {
  return (
    // JSX
  );
}
```

2. **型定義を追加** (`types/` に必要に応じて)

3. **必要に応じてスタイルを作成**

### スタイリング

**使用予定：** CSS Modules または Tailwind CSS

```typescript
// CSS Modules を使用する場合
import styles from './Button.module.css';

export function Button() {
  return <button className={styles.button}>Click</button>;
}
```

## トラブルシューティング

### ポート 3000 が使用中の場合
```bash
npm run dev -- -p 3001
```

### キャッシュをクリア
```bash
rm -rf .next
npm run dev
```

### パッケージの再インストール
```bash
rm -rf node_modules
npm install
npm run dev
```

## リンク
- [Next.js公式ドキュメント](https://nextjs.org/)
- [React公式ドキュメント](https://react.dev/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/)

