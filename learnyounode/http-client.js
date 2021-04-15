const http = require("http");
const url = process.argv[2];

const contents = http.get(url, function callback(response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    console.log(data);
  });
  response.on("error", function (err) {
    console.error(err);
  });
});
