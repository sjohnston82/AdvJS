const express = require("express");
const app = express();
const port = process.argv[2];
const files = process.argv[3];

app.use(require("stylus").middleware(files));
app.use(express.static(process.argv[3]));

app.listen(port);
