const http = require("http");
const { parse } = require("querystring");
const portNumber = 8000;
const file = require("./messages.json");
const fs = require("fs");
const url = require("url");

const users = ["Steve", "Jack"];
randomUser = function (users) {
  return users[Math.floor(Math.random() * users.length)];
};

const server = http.createServer((req, res) => {
  let newUrl = new URL(`http://localhost:${portNumber}${req.url}`);

  if (req.url === "/messages" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(file));
  } else if (req.url === "/messages" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const postDate = new Date().getTime();
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      // let message = JSON.parse(`{ "${postDate}": "${body}" }`);
      const randoUser = randomUser(users);
      let message = JSON.parse(
        `{"username":"${randoUser}", "timePosted": ${postDate}, "message": "${body}"}`
      );
      console.log(randoUser);
      fs.readFile("./messages.json", function (err, data) {
        if (err) throw err;
        let json = JSON.parse(data);
        json.push(message);
        fs.writeFile("./messages.json", JSON.stringify(json), function (err) {
          if (err) throw err;
          // console.log(JSON.stringify(json));
        });
        res.statusCode = 200;
        res.end("Message posted successfully");
      });

      // fs.appendFile("./messages.json", message, function (err) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   console.log(parse(body));
      // });
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ Message: "Route not found" }));
  }
});

server.listen(portNumber, () => console.log(`listening on port ${portNumber}`));

//   Work done on 4/16

//  -added res.on(end)
//  -switched from appendFile to read file, have to read the file,
//   parse it and push to get it to append to json array
//  -imported query string to parse
//  -formatted output message
//  -successfully posting properly formatted json through curl and postman
//  - added res.end to complete post request properly
//  - tried to add functionality to choose a random user (not working properly yet)
