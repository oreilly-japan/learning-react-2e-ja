package main

import (
	"log"
	"net/http"
)

func main() {
	//ディレクトリを指定する
	fs := http.FileServer(http.Dir("."))
	//ルーティング設定。"/"というアクセスがきたらstaticディレクトリのコンテンツを表示させる
	http.Handle("/", fs)

	log.Println("Listening...")
	// 3000ポートでサーバーを立ち上げる
	http.ListenAndServe(":3000", nil)
}

// go run server.go
