const http = require("http");
const url = require("url");
let myPort = process.argv[2];
//return json with hour, minute, and second only
//return UNIX epoch time
let server = http.createServer(function callback(request, response) {
  let myPath = new URL(`http://localhost:${myPort}${request.url}`);
  console.log(myPath);
  if (request.method === "GET") {
    if (myPath.pathname === "/api/parsetime") {
      let myDate = new Date(myPath.searchParams.get("iso"));
      let output = {
        hour: myDate.getHours(),
        minute: myDate.getMinutes(),
        second: myDate.getSeconds(),
      };
      let jsonString = JSON.stringify(output);
      response.end(jsonString);
    }

    if (myPath.pathname === "/api/unixtime") {
      let myDate = new Date(myPath.searchParams.get("iso"));
      let output = {
        unixtime: myDate.getTime(),
      };
      let jsonString = JSON.stringify(output);
      response.end(jsonString);
    }
  }
});
server.listen(myPort);
