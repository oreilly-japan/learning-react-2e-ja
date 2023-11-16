# Reactハンズオンラーニング 第2版

---

![表紙](learning-react-2e-ja.png)

---

本リポジトリはオライリー・ジャパン発行書籍『[Reactハンズオンラーニング 第2版](https://www.oreilly.co.jp/books/9784873119380/)』のサポートサイトです。

## サンプルコード

### ファイル構成

|フォルダ名 |説明                         |
|:--        |:--                          |
|chapter-01 |オフィシャルなサイトへのリンク集 |
|chapter-02 |2章で使用するソースコード    |
|...        |...                          |
|chapter-12 |12章で使用するソースコード   |

サンプルコードの解説は本書籍をご覧ください。

## ライセンス

## 正誤表

下記の誤りがありました。お詫びして訂正いたします。

本ページに掲載されていない誤植など間違いを見つけた方は、japan@oreilly.co.jpまでお知らせください。

### 第2刷まで

#### ■2章 P.30 20行目
**誤**
```
asyn/await
```
**正**
```
async/await
```

#### ■5章 P.88 サンプルコード下から2行目
**誤**
```
document.getElementById("react-container")
```
**正**
```
document.getElementById("root")
```

#### ■5章 P.95 11行目
**誤**
```
以下は分離したInsttructionsコンポーネントです。
```
**正**
```
以下は分離したInstructionsコンポーネントです。
```

#### ■7章 P.160 下から10行目
**誤**
```
useReducer使えば、
```
**正**
```
useReducerを使えば、
```

#### ■8章 P.176 下から6行目の「`if (data.login === login) return;`」の行が不要
**誤**
```
  if (!data) return;
  if (data.login === login) return;
  const { name, avatar_url, location } = data;
```
**正**
```
  if (!data) return;
  const { name, avatar_url, location } = data;
```

#### ■8章 P.177 10行目
**誤**
```
また、データが未取得の場合や、すでに保存済みの場合は何もせずにreturnしています。
```
**正**
```
また、データが未取得の場合は何もせずにreturnしています。
```

#### ■8章 P.177 下から16行目の「`if (data.login === login) return;`」の行が不要
**誤**
```
    if (!data) return;
    if (data.login === login) return;
    const { name, avatar_url, location } = data;
```
**正**
```
    if (!data) return;
    const { name, avatar_url, location } = data;
```

#### ■8章 P.178 10行目
**誤**
```
いずれの処理も、すでに処理済みのデータを再処理しないようにif文でreturnしています。
```
**正**
```
また、すでに取得したデータを再取得しないようにif文でreturnしています。
```

#### ■9章 P.225 最下行（訳注）
**誤**
```
後者は条件分
```
**正**
```
後者は条件文
```

#### ■9章 P.235 下から9行目
**誤**
```
throw pending;
```
**正**
```
throw promise;
```

#### ■9章 P.239 12行目
**誤**
```
DOMの更新は非同期処理
```
**正**
```
DOMの更新は同期処理
```

#### ■12章 P.296 10行目
**誤**
```
printNames
```
**正**
```
userDetails
```


### 第1刷

#### ■2章 P.27 20行目
**誤**
```
API呼び出しnnn等
```
**正**
```
API呼び出し等
```

#### ■2章 P.27 25行目
**誤**
```
以前はサーバーが公開するREST REST APIを呼び出すために、
```
**正**
```
以前はサーバーが公開するREST APIを呼び出すために、
```

#### ■3章 P.44 下から4行目の「`return frederick;`」の行が不要
**誤**
```
function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
  return frederick;
}
```
**正**
```
function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;
}
```
