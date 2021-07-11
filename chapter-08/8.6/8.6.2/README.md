サンプルアプリケーション
==========

#### インストール
以下のコマンドで依存モジュールをインストールしてください
```
$ npm install
```

#### 設定
実行するには`src/App.js`の`<PERSONAL ACCESS TOKEN>`の部分を書き換える必要があります。

```
const client = new GraphQLClient( "https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer <PERSONAL ACCESS TOKEN>`
  }
});
```

#### ビルド
以下のコマンドで`build`フォルダ配下に成果物が出力されます
```
$ npm run build
```

#### 実行
以下のコマンドでアプリケーションが実行されます
```
$ npm start
```

