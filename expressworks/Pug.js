const express = require("express");
const app = express();
const port = process.argv[2];
const path = require("path");

const pugPath = process.argv[3];

app.get("/home", (req, res) => {
  app.set("views", path.join(__dirname, "templates"));
  app.set("view engine", "pug");
  res.render(pugPath, { date: new Date().toDateString() });
});

app.listen(port);
