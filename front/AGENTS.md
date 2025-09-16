# Repository Guidelines

## プロジェクト構成とモジュール配置
- Next.js 15 ベースのアプリは `app/` と `middleware.ts` でルーティングを管理し、共通 UI ロジックは `src/app`・`src/shared`・`src/widgets` に整理されています。
- ドメインごとのエンティティと機能はそれぞれ `src/entities` と `src/features` に分離し、再利用性を優先した分割を保ちます。
- API・データ層は `lib/` と `schema.prisma`、生成コードは `generated/` に配置されるため、自動生成物の直接編集は避けてください。
- 単体テストは `__tests__/` と `src/**/__tests__`、E2E テストは Playwright 用に `e2e/` と `playwright.config.ts`、静的アセットは `public/` にまとまっています。

## ビルド・テスト・開発コマンド
- `npm run dev` : Turbopack でローカル開発サーバーを起動。`.env.local` を最新化してから実行します。
- `npm run build` : Prisma スキーマを再生成後に Next.js を本番ビルド。CI でも同コマンドが実行される想定です。
- `npm run start` : 本番ビルド成果物をポート 3000 で起動。
- `npm run lint:biome` / `npm run format` : Biome による静的解析と自動整形。PR 送信前に両方の実行を推奨。
- `npm run test` : Vitest による高速テストラン。E2E は `npx playwright test --project=chromium` のようにブラウザごとに併走してください。

## コーディングスタイルと命名規約
- TypeScript/TSX は 2 スペースインデントとセミコロン有りの Biome プリセットを維持します。`biome.json` に準拠し、手動で整形しないでください。
- React コンポーネントはパスカルケース、フックは `useXxx`、ユーティリティはキャメルケースで命名します。ファイルは役割単位で `kebab-case.ts` とし、ディレクトリは複合語でもハイフンを使わず短く保ちます。
- Tailwind クラスは `src/shared` のプリミティブを再利用し、ローカルなカスタムは `tailwind.config.ts` に追加してから使用します。

## テスト指針
- 単体テストは Vitest と Testing Library を利用し、テストファイルは `*.test.ts(x)` 命名で対象モジュールと同階層に配置します。
- モックは `src/shared/tests`（未作成の場合は新設）の共通ヘルパーへ集約し、カバレッジ 80% 以上を CI 目標とします。
- Playwright のシナリオは `e2e/scenarios/*.spec.ts` にまとめ、`npx playwright test --ui` での録画確認を推奨します。

## コミットと Pull Request ガイドライン
- Git ログは「機能説明 + 簡潔な名詞句」の日本語コミットが主流です。例: `ダッシュボードデータ取得修正`。動詞は省略し、変更対象を先頭に置いてください。
- 1 コミット 1 トピックで構成し、生成ファイルのコミットは極力避けます。Prisma 生成物は `npm run build` で再作成できることをコメントで明記。
- PR には概要・スクリーンショット・関連 Issue（`#123`）を添付し、影響範囲や動作確認手順をチェックリスト形式で示します。

## セキュリティと設定のヒント
- .env 管理は Vercel 環境を基準にし、秘密情報は Git に含めないでください。ローカル同期は `vercel env pull` で行います。
- Prisma マイグレーションは `prisma migrate dev --name <feature>` を利用し、適用後に `npm run build` で生成物を更新してから PR を作成します。
