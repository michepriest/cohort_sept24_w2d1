// utilize the https library to GET a given URL
const https = require("https");
// Should you require https inside or outside of the function? Does it matter in this case? If not, in what situations would it matter?
// Outside, via Node.js Best Practices http://justbuildsomething.com/node-js-best-practices/#2




function getAndPrintHTMLChunks () {

// What do you notice about the results? Do you think this is the best way to handle the incoming data? How could we improve upon this?

  const requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };


  https.get(requestOptions, function (response) {
    response.setEncoding("utf8");
    
    response.on("data", function (data) {
      console.log(data + "\n");
    });

    response.on("end", function() {
      // append each chunk of data to a variable as it is received
      // console.log("Response stream complete.");
    });
  });
}

getAndPrintHTMLChunks();