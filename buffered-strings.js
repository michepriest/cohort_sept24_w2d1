const https = require("https");


function getAndPrintHTMLChunks () {

  // What do you notice about the results? Do you think this is the best way to handle the incoming data? How could we improve upon this?
  
    const requestOptions = {
      host: "sytantris.github.io",
      path: "/http-examples/step2.html"
    };
  
    let buffedData = "";        // why was const a bad idea for this?

  
    https.get(requestOptions, function (response) {
      response.setEncoding("utf8");
      
      response.on("data", function (data) {
        buffedData += data;
      });
  
      response.on("end", function() {
        // append each chunk of data to a variable as it is received
        console.log(buffedData);

        // console.log the data once all of the data has been received
      });
    });
  }


getAndPrintHTMLChunks();