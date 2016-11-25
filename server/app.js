"use strict";

let express = require("express");
let app = express();

//app.use(express.static(__dirname + "/*"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/getLetters", (req, res) => {
  res.json(
    {
       "data": [
        {
          "letter": "a",
          "chosen": false
        },
        {
          "letter": "b",
          "chosen": false
        },
        {
          "letter": "c",
          "chosen": false
        },
        {
          "letter": "d",
          "chosen": false
        },
        {
          "letter": "e",
          "chosen": false
        },
        {
          "letter": "f",
          "chosen": false
        },
        {
          "letter": "g",
          "chosen": false
        },
        {
          "letter": "h",
          "chosen": false
        },
        {
          "letter": "i",
          "chosen": false
        },
        {
          "letter": "j",
          "chosen": false
        },
        {
          "letter": "k",
          "chosen": false
        },
        {
          "letter": "l",
          "chosen": false
        },
        {
          "letter": "m",
          "chosen": false
        },
        {
          "letter": "n",
          "chosen": false
        },
        {
          "letter": "o",
          "chosen": false
        },
        {
          "letter": "p",
          "chosen": false
        },
        {
          "letter": "q",
          "chosen": false
        },
        {
          "letter": "r",
          "chosen": false
        },
        {
          "letter": "s",
          "chosen": false
        },
        {
          "letter": "t",
          "chosen": false
        },
        {
          "letter": "u",
          "chosen": false
        },
        {
          "letter": "v",
          "chosen": false
        },
        {
          "letter": "w",
          "chosen": false
        },
        {
          "letter": "x",
          "chosen": false
        },
        {
          "letter": "y",
          "chosen": false
        },
        {
          "letter": "z",
          "chosen": false
        }
      ]
    }
  );
});

app.listen(8181, () => console.log("listening on 8181"));
