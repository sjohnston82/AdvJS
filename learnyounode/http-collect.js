const http = require("http");
const bl = require("bl");
const url = process.argv[2];

const collection = http.get(url, function callback(response) {
  response.pipe(
    bl(function (err, data) {
      if (err) {
        console.error(err);
      }
      console.log(data.toString().split("").length);
      console.log(data.toString());
    })
  );
});
