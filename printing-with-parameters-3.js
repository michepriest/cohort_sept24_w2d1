const https = require("https");

function getAndPrintHTML () {

  var options = {
    host: (process.argv[2]),
    path: (process.argv[3])
  }

  let buffedData = ""; // anytime you have an empty variable you're going to change the variable so use "let"

  https.get(options, function (response) {
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

getAndPrintHTML();