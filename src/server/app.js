"use strict";

let express = require("express");
let app = express();

app.use(express.static(__dirname + "../"));

app.get("/getUsers", (req, res) => {
  res.json(["hello", "world"]);
});

app.listen(8181, () => console.log("listening on 8181"));
