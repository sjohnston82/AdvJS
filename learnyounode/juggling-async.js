const http = require("http");
const bl = require("bl");
const urls = process.argv.slice(2);
const output = [];
const count = 0;
// // const one = process.argv[2];
// // const two = process.argv[3];
// // const three = process.argv[4];

const returnResponses = function () {
  returned.forEach((res) => console.log(res));
};

urls.forEach(function (url, i) {
  http.get(url, function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) {
          console.error(err);
        }
        returned[i] = data.toString();
        count++;
        if (count === 3) {
          returnResponses();
        }
      })
    );
  });
});
// // const returnResponses = function () {
// //   console.log(returned[0]);
// //   console.log(returned[1]);
// //   console.log(returned[2]);
// // };

// // http.get(one, (response) => {
// //   response.setEncoding("utf8");
// //   let data = "";
// //   response.on("data", (chunk) => {
// //     data += chunk;
// //   });
// //   response.on("end", () => {
// //     returned[0] = data;
// //     count++;
// //     if (count === 3) {
// //       returnResponses();
// //     }
// //   });
// // });

// // http.get(two, (response) => {
// //   response.setEncoding("utf8");
// //   let data = "";
// //   response.on("data", (chunk) => {
// //     data += chunk;
// //   });
// //   response.on("end", () => {
// //     returned[1] = data;
// //     count++;
// //     if (count === 3) {
// //       returnResponses();
// //     }
// //   });
// // });

// // http.get(three, (response) => {
// //   response.setEncoding("utf8");
// //   let data = "";
// //   response.on("data", (chunk) => {
// //     data += chunk;
// //   });
// //   response.on("end", () => {
// //     returned[2] = data;
// //     count++;
// //     if (count === 3) {
// //       returnResponses();
// //     }
// //   });
// // });

// const myList = process.argv.slice(2);

// for (let i = 0; i < myList.length; i++) {
//   http.get(myList[i], (response) => {
//     response.setEncoding("utf8");
//     let data = "";

//     response.on("data", (chunk) => {
//       data += chunk;
//     });
//     response.on("end", () => {
//       output[i] = data;
//       count++;
//       if (count === myList.length) {
//         output.forEach((element) => {
//           console.log(element);
//         });
//       }
//     });
//   });
// }

// var http = require("http");
// var bl = require("bl");
// var results = [];
// var count = 0;

// function printResults() {
//   for (var i = 0; i < 3; i++) console.log(results[i]);
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(
//       bl(function (err, data) {
//         if (err) return console.error(err);

//         results[index] = data.toString();
//         count++;

//         if (count == 3) printResults();
//       })
//     );
//   });
// }

// for (var i = 0; i < 3; i++) httpGet(i);
