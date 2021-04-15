const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`${new Date()}${req.method} ${req.url}`);
  res.end("hello");
});

server.listen(8000, function () {
  console.log("server listening on port 8000");
});
