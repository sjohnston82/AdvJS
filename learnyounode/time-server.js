const net = require("net");
const port = process.argv[2];

const zeroes = (x) => {
  return (x < 10 ? "0" : "") + x;
};

function timeNow() {
  let d = new Date();
  return (
    d.getFullYear() +
    "-" +
    zeroes(d.getMonth() + 1) +
    "-" +
    zeroes(d.getDate()) +
    " " +
    zeroes(d.getHours()) +
    ":" +
    zeroes(d.getMinutes())
  );
}

const server = net.createServer(function (socket) {
  socket.end(timeNow() + "\n");
});

server.listen(port);
