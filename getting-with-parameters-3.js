const https = require("https");
let requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
 };

function getAndPrintHTML (options) {

  let buffedData = ""; // anytime you have an empty variable you're going to change the variable so use "let"

   https.get(options, function (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
      buffedData += data;
    })
    response.on("end", function() {
      // console.log the data once all of the data has been received
      console.log(buffedData);
    });
  });
}

function getHTML(options, callback) {
  let buffedData = ""; // anytime you have an empty variable you're going to change the variable so use "let"

   https.get(options, function (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
      buffedData += data;
    })
    response.on("end", function() {
      // console.log the data once all of the data has been received
      callback(buffedData);
    });
  });
}

getHTML(requestOptions, printHTML)
// The function body will invoke (call) the callback when the data is fully received, 
// in place of the original console.log

function printHTML (html) {
  console.log(html);
}

getAndPrintHTML(requestOptions);

