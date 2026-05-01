# Amazone Nature Lodge - 開発ガイド

このプロジェクトは、フランス領ギアナの熱帯雨林にある「Amazone Nature Lodge（アマゾン・ネイチャー・ロッジ）」の公式サイトの日本語版プロトタイプです。

## 技術スタック
- **Frontend**: React 19, Vite 6, TypeScript
- **Styling**: Tailwind CSS 4 (モダンなコンフィギュレーション)
- **Animation**: Motion (旧 Framer Motion)
- **Icons**: Lucide React
- **Typography**: Noto Sans JP / Noto Serif JP

## ファイル構造
- `src/App.tsx`: メインのページレイアウトとインタラクション。
- `src/constants.ts`: ウェブサイトのすべてのテキストコンテンツ。翻訳や修正はこのファイルを編集してください。
- `src/index.css`: フォントのインポートとカスタムテーマ（フォレストグリーン、アースカラーなど）の設定。
- `vite.config.ts`: Viteの設定。パスエイリアス `@` がルートに設定されています。

## Vercel へのデプロイ
このプロジェクトは Vercel の「Vite + React」プリセットでそのままデプロイ可能です。

1. GitHub にリポジトリを push します。
2. Vercel Dashboard で「New Project」を選択。
3. リポジトリをインポート。
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. デプロイ完了！

## 昆虫学（Entomology）へのこだわり
クライアントの要望に基づき、随所に昆虫（Bug）のアイコンやマイクロインタラクションを配置しています。
- ロゴの横で羽ばたく虫のモジュール
- 予約ボタン内の脈動する虫のアイコン
- 昆虫学セクションの専用アイコンとレイアウト
- フッター付近の巨大な虫のグラフィック背景

## 連絡先
追加のコンテンツ（画像、詳細テキスト）がある場合は、随時お知らせください。
