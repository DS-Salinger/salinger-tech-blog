# salinger-tech-blog

## はじめに

  本コードはTypeScript + React + Next.js + Tailwind CSS を利用して構築した自作テックブログです。デプロイ先としてFirebaseを利用しています。ベースのテンプレートは[https://vercel.com/templates/next.js/blog-starter-kit](https://vercel.com/templates/next.js/blog-starter-kit)を利用しました。最終的に見た目の部分はほぼすべて書き直しに近い形になっています。
    
## 詳細情報

環境構築などの詳細は[Blog](Blog)を参照してください。

## 追加・改修した部分

- レスポンシブデザイン
   - 画面サイズ3段階で切り替わる
- TOPページ
   - ほぼすべて書き直し
- 記事
   - タグ追加
   - 記事の格納先をディレクトリ単位に変更
      - 格納した画像を public 以下に自動コピーしURLを自動変換
- 最新一覧ページ追加
- 特定タグを含む記事一覧ページ追加
- Markdown 変換
   - 変換後のページデザイン変更
   - GFM対応
   - コードの色付け対応
   - 数式対応
   - 絵文字対応
- Firebase に自動デプロイできるように設定

## 開発環境の準備

Docker を利用してコンテナを作成する。リポジトリをcloneしたのち下記コマンドでコンテナを起動。

```
$ docker compose build
$ docker compose create
$ docker compose start
```

コンテナ内部に入り下記コマンドで開発用サーバを起動できる。

```
$ cd /app/salinger-tech-blog
$ npm run dev
```

## デプロイ方法

ファイルを編集した後、GitHub リポジトリの main ブランチに変更がマージされると CI が動いて自動で更新される。

## ディレクトリ構造

### 現在のディレクトリ構造

  テンプレートから大幅に変わった部分についてコメントを記載。

```
(root)
├── Dockerfile
├── README.md
├── app
│   └── salinger-tech-blog: 名称変更
│       ├── 404.html
│       ├── @types
│       │   └── remark-html.d.ts
│       ├── README.md
│       ├── _post: 記事の格納方法をディレクトリ単位に変更
│       │   ├── YYYYMMDD-[slug]/article.md: 記事本文
│       │   └── YYYYMMDD-[slug]/hoge.png: 画像などの保存先
│       ├── components
│       │   ├── avatar.tsx
│       │   ├── base-frame.tsx: レスポンシブデザインのコントロール
│       │   ├── container.tsx: ページ全体へのコンテナの適用
│       │   ├── cover-image.tsx
│       │   ├── date-formatter.tsx
│       │   ├── dummy-post.tsx: トップページで記事の件数が少ない場合の位置合わせ用
│       │   ├── footer.tsx
│       │   ├── header.tsx
│       │   ├── home-about.tsx: トップページ About
│       │   ├── home-author.tsx: トップページ Author
│       │   ├── layout.tsx
│       │   ├── main-menu.tsx: 画面サイズ最大時に表示する左側メニュー
│       │   ├── markdown-styles.module.css
│       │   ├── meta.tsx
│       │   ├── pagination.tsx: ページネーション処理の実装
│       │   ├── post-body.tsx: 記事本文要素
│       │   ├── post-header.tsx: 記事ヘッダー要素
│       │   ├── post-preview.tsx: 記事プレビュー要素
│       │   └── post-title.tsx: 記事タイトル要素
│       ├── firebase.json
│       ├── interfaces
│       │   ├── author.ts
│       │   └── post.ts
│       ├── lib
│       │   ├── api.ts
│       │   ├── constants.ts
│       │   └── markdownToHtml.ts
│       ├── next-env.d.ts
│       ├── node_modules
│       ├── out
│       ├── package-lock.json
│       ├── package.json
│       ├── pages
│       │   ├── _app.tsx
│       │   ├── _document.tsx
│       │   ├── arch.tsx: 特定タグを含む記事一覧ページ
│       │   ├── ds.tsx: 特定タグを含む記事一覧ページ
│       │   ├── index.tsx: トップページ
│       │   ├── new.tsx: 最新記事一覧ページ
│       │   ├── nlp.tsx: 特定タグを含む記事一覧ページ
│       │   ├── other.tsx: 特定タグを含む記事一覧ページ
│       │   └── posts/[slug].tsx
│       ├── postcss.config.js
│       ├── public
│       │   ├── assets
│       │   └── favicon
│       ├── styles
│       │   └── index.css
│       ├── tailwind.config.js
│       └── tsconfig.json
└── docker-compose.yml
```

### 【参考】テンプレートから作成した直後のディレクトリ構造

```
(root)
├── Dockerfile
├── README.md
├── app
│   └── react-next-blog-sample
│       ├── 404.html: 404 Not Found ページ
│       ├── @types : TypeScript 型定義ファイル
│       │   └── remark-html.d.ts: remark-html の型定義
│       ├── README.md: 本アプリの README
│       ├── _posts: ブログ記事の格納先(1ファイル=1記事)
│       │   ├── dynamic-routing.md: 記事1
│       │   ├── hello-world.md: 記事2
│       │   └── preview.md: 記事3
│       ├── components: アプリ全体で利用するコンポーネント群(pagesから呼び出す)
│       │   ├── alert.tsx: 画面上部の通知に関するコンポーネント
│       │   ├── avatar.tsx: 筆者のアバターと名前に関するコンポーネント
│       │   ├── container.tsx: メインのコンテンツを表示する部分のコンポーネント
│       │   ├── cover-image.tsx: 記事の画像表示領域部分のコンポーネント(TOP/個別記事)
│       │   ├── date-formatter.tsx: 日付のフォーマット変換用コンポーネント
│       │   ├── footer.tsx: すべてのページで表示されるフッター領域のコンポーネント
│       │   ├── header.tsx: 各記事で表示されるヘッダー領域のコンポーネント
│       │   ├── hero-post.tsx: TOPページにある最新記事領域のコンポーネント
│       │   ├── intro.tsx: TOPのタイトルとディスクリプション領域のコンポーネント
│       │   ├── layout.tsx: アラート、メインコンテンツ、フッタ－の配置を行うコンポーネント
│       │   ├── markdown-styles.module.css: MarkdownをHTMLに変換する際に適用されるCSS
│       │   ├── meta.tsx: headタグ(Favicon、metaタグなど)に関する内容を記載するコンポーネント
│       │   ├── more-stories.tsx: 2番目以降の記事を記載するコンポーネント
│       │   ├── post-body.tsx: 記事ページの本文表示部分のコンポーネント
│       │   ├── post-header.tsx: 記事ページのタイトル＋著者＋画像＋日付表示部分のコンポーネント
│       │   ├── post-preview.tsx: TOPページの記事プレビュー表示部分のコンポーネント
│       │   ├── post-title.tsx: 記事ページのタイトル表示部分のコンポーネント
│       │   └── section-separator.tsx: セクションを区切る水平線のコンポーネント
│       ├── firebase.json: Firebase関連の設定ファイル(今回は弄らない)
│       ├── index.html: Firebaseの初期設定で生成される(★削除する？)
│       ├── interfaces: 型定義を配置
│       │   ├── author.ts: Authorの型定義
│       │   └── post.ts: Postの型定義
│       ├── lib: ライブラリ（Reactの表示に関連するtsxでない）を配置
│       │   ├── api.ts: 記事データを引っ張ってくるAPIを記載（今回はローカルファイルからReadするだけ）
│       │   ├── constants.ts: 各種定数を定義
│       │   └── markdownToHtml.ts: MarkdownをHTMLに変換するライブラリ
│       ├── next-env.d.ts: TypeScriptのための設定ファイル(今回は弄らない)
│       ├── node_modules: インストールされたJavaScript/TypeScriptライブラリの保存先(今回は弄らない)
│       ├── out: ビルドされた本番用ファイルの格納先(今回は弄らない)
│       ├── package-lock.json: パッケージのバージョン管理のためのファイル(今回は弄らない)
│       ├── package.json: 必要なJavaScript/TypeScriptのパッケージを記載
│       ├── pages
│       │   ├── _app.tsx: すべてのページコンポーネントの初期化で使われるコンポーネント
│       │   ├── _document.tsx: 全ページ共通の要素（headタグなど）を定義する
│       │   ├── index.tsx: アプリ全体のトップ画面
│       │   └── posts
│       │       └──[slug].tsx: 各記事の表示方法を記載
│       ├── postcss.config.js: CSS関連のプラグイン(今回は弄らない)
│       ├── public: ファイルをそのまま公開するものを配置
│       │   ├── assets: ここ以下に著者、各ページの画像を配置
│       │   └── favicon: Favicon 画像を配置
│       ├── styles: CSS関連のファイルを配置
│       │   └── index.css: Tailwind CSSの読込が記載されている(今回は弄らない)
│       ├── tailwind.config.js: Tailwind CSS の設定ファイル
│       └── tsconfig.json: TypeScriptに関する設定ファイル
└── docker-compose.yml
```
