const https = require("https");

function getAndPrintHTML () {

  let buffedData = ""; // anytime you have an empty variable you're going to change the variable so use "let"

  https.get(requestOptions, function (response) {
    response.setEncoding("utf8");
    
    response.on("data", function (data) {
      // append each chunk of data to a variable as it is received
      buffedData += data;
    });

    response.on("end", function() {
      // console.log the data once all of the data has been received
      console.log(buffedData);
    })
  })
};

let requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
};

getAndPrintHTML(requestOptions);