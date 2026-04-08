# VS Code 推奨拡張機能

以下の拡張機能は、本プロジェクトの開発に推奨されます。

- **ESLint** (`dbaeumer.vscode-eslint`): JavaScript/TypeScript のリンティング
- **Prettier** (`esbenp.prettier-vscode`): コード自動整形
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`): Tailwind CSS の自動補完（Tailwind CSS を使用する場合）
- **TypeScript Next** (`ms-vscode.vscode-typescript-next`): TypeScript サポート強化
- **GitLens** (`eamodio.gitlens`): Git 統合・コミット履歴確認
- **GitHub Copilot** (`GitHub.copilot`): AI コード補完
- **GitHub Copilot Chat** (`GitHub.copilot-chat`): AI チャット・質問機能
- **Project Manager** (`christopherjl.project-manager`): プロジェクト管理支援
- **Vitest Explorer** (`vitest.explorer`): テスト実行支援

## 使い方
1. `.vscode/extensions.json` を開く
2. Recommended 拡張機能をインストール
3. VS Code を再起動して設定を適用

## 補足
- `editor.defaultFormatter` に設定している拡張機能がインストールされていることを確認してください。
- プロジェクトでは `Prettier` を標準フォーマットツールとして利用します。
