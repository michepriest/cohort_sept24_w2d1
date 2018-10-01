const https = require("https");


function getAndPrintHTMLChunks () {

  // What do you notice about the results? Do you think this is the best way to handle the incoming data? How could we improve upon this?
  
    const requestOptions = {
      host: "sytantris.github.io",
      path: "/http-examples/step2.html"
    };
  
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
      });
    });
  }


getAndPrintHTMLChunks();