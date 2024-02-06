//サーバーのポートを指定する
const PORT = 8000;

//expressを使用できるようにする
const express = require("express");

//axiosをインポートする
const axios = require("axios");

//cheerioをインポートする
const cheerio = require("cheerio");

//サーバーを起動する
const app = express();

//Webスクレイピング開始

//スクレイピング先を指定
const URL ="https://search.rakuten.co.jp/search/mall/keyboard/";

//axiosを使用する
//HTTPリクエストを送る
axios(URL)
//.then→送信取得を行うためのpromiseオブジェクト(非同期処理)
//response→取得したデータを格納する変数
.then((response) => {
    //responseの中身を確認する
    const htmlparser=response.data;
    console.log(htmlparser)
})


//ポートを起動する(第一引数,サーバー起動確認)
app.listen(PORT,console.log("surver running"));