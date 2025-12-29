# Portfolio

ポートフォリオサイトのプロジェクトです。

## 技術構成

### フレームワーク・言語
- **Next.js 15.3.0** - Reactベースのフルスタックフレームワーク
- **React 19.0.0** - UIライブラリ
- **TypeScript 5** - 型安全性を提供する言語

### UI・スタイリング
- **Tailwind CSS 4** - ユーティリティファーストのCSSフレームワーク
- **shadcn/ui** - Radix UIベースのコンポーネントライブラリ
  - `@radix-ui/react-accordion` - アコーディオンコンポーネント
  - `@radix-ui/react-avatar` - アバターコンポーネント
  - `@radix-ui/react-dialog` - ダイアログコンポーネント
  - `@radix-ui/react-scroll-area` - スクロールエリアコンポーネント
  - `@radix-ui/react-separator` - セパレーターコンポーネント
  - `@radix-ui/react-tabs` - タブコンポーネント
- **lucide-react** - アイコンライブラリ
- **class-variance-authority** - コンポーネントのバリアント管理
- **clsx** / **tailwind-merge** - クラス名のユーティリティ

### バックエンド・データベース
- **Supabase** - BaaS（Backend as a Service）
  - `@supabase/supabase-js` - Supabaseクライアントライブラリ
  - `@supabase/ssr` - Next.js SSR対応のSupabaseクライアント

### 開発ツール
- **ESLint** - コード品質チェック
- **PostCSS** - CSS処理ツール

## 環境構築

### 前提条件
- Node.js 20以上
- npm / yarn / pnpm / bun のいずれか

### セットアップ手順

1. **リポジトリのクローン**
```bash
git clone <repository-url>
cd portfolio
```

2. **依存関係のインストール**
```bash
npm install
# または
yarn install
# または
pnpm install
# または
bun install
```

3. **環境変数の設定**

プロジェクトルートに `.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# Supabase設定
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Supabaseの設定方法：**
1. [Supabase](https://supabase.com/)でプロジェクトを作成
2. プロジェクトの「Settings」→「API」から以下を取得：
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **開発サーバーの起動**
```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

5. **ブラウザで確認**

[http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認してください。

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用ビルドを作成
- `npm run start` - 本番サーバーを起動（ビルド後）
- `npm run lint` - ESLintでコードをチェック

## プロジェクト構造

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   └── home.tsx      # ホームコンポーネント
│   ├── components/       # Reactコンポーネント
│   │   └── ui/           # shadcn/uiコンポーネント
│   ├── lib/              # ライブラリ・ユーティリティ
│   │   ├── client.ts
│   │   ├── supabaseClient.ts  # Supabaseクライアント
│   │   └── utils.ts
│   ├── utils/            # ユーティリティ関数
│   │   └── server/       # サーバーサイドユーティリティ
│   │   └── supabase.ts
│   └── globals.css       # グローバルスタイル
├── public/               # 静的ファイル
├── components.json       # shadcn/ui設定
├── next.config.ts       # Next.js設定
├── tsconfig.json        # TypeScript設定
└── package.json         # 依存関係
```

## デプロイ

### Vercelへのデプロイ

1. [Vercel](https://vercel.com/)にアカウントを作成
2. GitHubリポジトリを連携
3. 環境変数を設定：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. デプロイを実行

詳細は [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。
