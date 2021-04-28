const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.argv[2];

app.use(bodyparser.urlencoded({ extended: false }));
app.post("/form", function (req, res) {
  let string = req.body.str.split("").reverse().join("");
  res.send(string);
});

app.listen(port);
