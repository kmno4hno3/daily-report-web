# Repository Guidelines

## Project Structure & Module Organization
- `src/main.rs` がアプリのエントリーポイントで、Axum ルーターと依存関係の初期化をまとめます。
- `src/presentation/handlers/` は HTTP ハンドラーとルーティング層、`src/usecase/` はユースケースサービス、`src/domain/` はエンティティとリポジトリインターフェイス、`src/infrastructure/` は SQLx ベースの実装です。
- `migrations/` 直下に SQLx のバージョン管理付きマイグレーション、`.env` と `compose.yml` でローカル PostgreSQL を構成します。

## Build, Test, and Development Commands
- `docker compose up -d db` : ローカル開発用 PostgreSQL を起動。初回はボリュームが作成されるまで数秒待機します。
- `cargo run` : API サーバーを起動。環境変数 `DATABASE_URL` が `.env` から読み込まれていることを確認してください。
- `cargo build --release` : リリースバイナリを生成し、本番動作を想定した検証に使用します。
- `cargo sqlx migrate run` : マイグレーションを適用。新しいクエリを追加したら `sqlx prepare` で検証してください。
- `cargo make db-shell` : `report-db` コンテナ内の psql を開き、その場でスキーマ確認ができます。

## Coding Style & Naming Conventions
- コード整形は `cargo fmt`、静的解析は `cargo clippy --all-targets --all-features` をコミット前に必ず実行します。
- モジュールとファイル名は `snake_case`、公開型は `PascalCase`、非公開フィールドは `snake_case` を維持してください。
- ハンドラーは HTTP メソッドとリソースを組み合わせた命名（例: `get_reports_handler`）、DTO は `*Response` / `*Request` 接尾辞で統一します。

## Testing Guidelines
- 単体テストは各モジュールに `#[cfg(test)]` ブロックを追加し、ビジネスロジックをドメイン層で検証します。
- 振る舞いが複数レイヤーに跨る場合は `tests/` ディレクトリに統合テストを追加し、`cargo test -- --nocapture` でログを確認してください。
- 新規ユースケースは Happy / Error パスの双方にテストを用意し、DB を使う場合は専用テスト用スキーマをマイグレーションで用意します。

## Commit & Pull Request Guidelines
- Git 履歴は短い命令形の日本語メッセージ（例: `ダッシュボードデータ取得修正`）で揃えています。最初に対象領域、次に行った変更を明示してください。
- PR では目的、主要変更点、検証手順、影響範囲を箇条書きで記述し、該当 Issue を `Closes #123` 形式でリンクします。
- UI や API 仕様を変更した場合はスクリーンショットまたはリクエスト/レスポンス例を添付し、DB 更新を伴う場合は必要なマイグレーション手順も記載します。

## Security & Configuration Tips
- `.env` に含まれるシークレットは共有しないでください。ローカルでは `cp .env.example .env` によりテンプレートから生成します。
- JWT シークレットや DB パスワードを更新した際は `docker compose restart db` を実行し、古い環境変数をリセットします。
- SQLx のクエリチェックを有効にするため `DATABASE_URL` を `sqlx-data.json` 生成時と実行時で一致させ、不要なログは `tracing` のフィルターで抑制してください。
