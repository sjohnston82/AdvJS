const express = require("express");
const app = express();
const port = process.argv[2];
const file = process.argv[3];
const fs = require("fs");

app.get("/books", function (req, res) {
  fs.readFile(file, function (err, data) {
    if (err) {
      console.error(err);
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port);
