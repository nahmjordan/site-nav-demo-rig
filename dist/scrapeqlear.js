var https = require('https');
var fs = require('fs');

var options = {
    hostname: "qlear.build",
    port: 443, //probably 443, possibly 80?
    path: "/",
    method: "GET"
};

var req = https.request(options, (res) => {

    var responseBody = "";

    console.log("response from server starting");
    console.log(`status: ${res.statusCode}`);

    res.setEncoding("UTF-8");

    /*res.once("data", (chunk) => {
        console.log(chunk);
    });*/

    res.on("data", function(chunk) {
       console.log(`--chunk-- ${chunk.length}`);
       responseBody += chunk;
    });

    res.on("end", function() {
        fs.writeFile("../src/qlear.html", responseBody, (err) => {
            if (err) {
                throw err;
            }
            console.log("file downloaded");
        });
    });
});

req.on("error", (err) => {
    console.log(`problem with request: ${err.message}`);
});

req.end();