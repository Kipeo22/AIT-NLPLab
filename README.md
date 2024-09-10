This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 編集の仕方

このリポジトリをローカル環境にクローンする

1. "Code"から"HTTPS"をコピー
   <img src="public/readme_img/スクリーンショット 2024-05-28 11.47.49.png">
2. ターミナル以下を実行

```bash
git clone [さっきコピーしたURL]
```

3. node モジュールをインストールする

```
npm i
```

準備はこれで Ok

## ローカルホストを起動する

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) ローカルホスト 3000 で起動

## github の基本操作

```bash
git add -A ← 全ての変更されたファイルをcommit対象に追加

git commit -m "変更点を記入"

git push ← github上にアップロード

git fetch ← 最新の状態に更新

git branch ← 今いるブランチを確認

git checkout [ブランチ名] ← ブランチを変更

```

### VScode 上でも git の操作ができる

<img src="public/readme_img/スクリーンショット 2024-05-28 12.36.19.png">
<img src="public/readme_img/スクリーンショット 2024-05-28 12.37.30.png">
<img src="public/readme_img/スクリーンショット 2024-05-28 12.38.28.png">

## ファイル管理

ソースファイルは app 内に格納
