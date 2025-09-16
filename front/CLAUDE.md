# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発環境のセットアップと基本コマンド

### 依存関係のインストール
```bash
pnpm install
```

### 開発サーバーの起動
```bash
pnpm dev
```

### ビルド
```bash
pnpm build
```

### コード品質チェック（Linting + Formatting）
```bash
pnpm check  # BiomeによるLintとFormatを一括実行
```

### フォーマット
```bash
pnpm format  # Biomeによるフォーマット
```

### Linting
```bash
pnpm lint:biome  # BiomeによるLint
```

### テスト実行
```bash
pnpm test  # Vitestによるテスト実行
```

### Prismaスキーマの生成
```bash
pnpm prisma generate
```

## プロジェクトアーキテクチャ

### 技術スタック
- **Framework**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データベース**: PostgreSQL + Prisma ORM
- **認証**: NextAuth.js v5
- **テスト**: Vitest + Testing Library
- **Linter/Formatter**: Biome
- **UIコンポーネント**: Radix UI + shadcn/ui
- **状態管理**: Jotai + React Query (TanStack Query)
- **エディタ**: TipTap (リッチテキストエディタ)

### ディレクトリ構造（Feature Sliced Design風）

```
src/
├── app/          # Next.js App Router設定、グローバルスタイル、プロバイダー
├── entities/     # ビジネスエンティティの型定義とロジック
│   ├── dashboard/
│   └── report/
├── features/     # 機能単位のコンポーネントとロジック
│   ├── alert/    # アラートダイアログ機能
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   ├── report/
│   ├── search/
│   └── select-date/
├── pages/        # ページコンポーネント（UIの組み立て）
│   ├── home/
│   ├── profile/
│   ├── report/
│   └── settings/
├── shared/       # 共通ユーティリティとUIコンポーネント
│   ├── api/      # API関連のユーティリティ
│   ├── lib/      # 共通ライブラリ
│   └── ui/       # 共通UIコンポーネント
└── widgets/      # 複合UIウィジェット
    ├── content-area/
    ├── navbar/
    ├── sidebar/
    └── sidebar-layout/

app/              # Next.js App Routerのルーティング定義
├── (protected)/  # 認証必須ページ
│   ├── profile/
│   ├── report/
│   └── settings/
└── auth/        # 認証関連ページ
    └── login/
```

### ルーティング構造
- `/auth/login` - ログインページ
- `/(protected)/` - 認証が必要なページ群
  - `/report/create` - レポート作成
  - `/report/[id]` - レポート詳細
  - `/report/list` - レポート一覧
  - `/profile` - プロフィール
  - `/settings` - 設定

### 認証フロー
- NextAuth.js v5を使用し、JWTベースのセッション管理
- `middleware.ts`で認証ルートの保護を実装
- Prisma Adapterを使用してデータベースと連携

### データベース設計
- Prismaスキーマは`schema.prisma`に定義
- 生成されたクライアントは`generated/client`に出力
- PostgreSQL使用、タイムゾーンは`Asia/Tokyo`

### コーディング規約

#### Biome設定
- インデント: タブ
- クォート: ダブルクォート
- セミコロン: 必要な場合のみ（asNeeded）
- import文の自動整理: 有効

#### TypeScript
- `any`型、`unknown`型の使用禁止
- クラスの使用は最小限に（例: カスタムエラーのみ）
- 厳格な型定義を推奨

### 開発時の注意点

1. **Prismaクライアントの生成**
   - `schema.prisma`変更後は必ず`pnpm prisma generate`を実行
   - クライアントは`@/generated/client`からインポート

2. **認証済みページの作成**
   - `app/(protected)/`配下に配置
   - middlewareが自動的に認証チェックを実施

3. **コンポーネント作成時**
   - Feature Sliced Designに従い、適切な層に配置
   - entities → features → pages → widgetsの依存関係を守る

4. **テスト作成**
   - Vitestを使用し、`*.test.ts(x)`形式で作成
   - Testing Libraryを使用してUIテストを実装

5. **コード品質の維持**
   - コミット前に`pnpm check`を実行
   - Biomeの警告・エラーをすべて解消