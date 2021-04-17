const http = require("http");

const port = process.env.PORT || 5000;
const file = require("./messages.json");

const server = http.createServer((req, res) => {
  if (req.url === "/api/messages" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(file));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(port, () => console.log(`listening on port ${port}`));
