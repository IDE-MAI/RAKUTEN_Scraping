const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
app.listen(PORT, () => console.log("running"));

const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";
const data = [];

axios(URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    const titles = [];
    $(".searchresultitem", htmlParser).each((index, element) => {
      const title = $(element).text();
      //titles.push(title);
      const price = $(element).find(".price--OX_YW").text();
      data.push({ title, price });
      console.log(data);
    });

  })
  .catch((error) => console.log(error));