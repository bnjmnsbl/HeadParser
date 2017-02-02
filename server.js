var express = require("express");
var app = express();

app.get("/", function(req, res) {

   var returnObj = {};
   returnObj.ipadress = req.headers['x-forwarded-for']
   returnObj.language = req.headers["accept-language"].slice(0, 2);
   returnObj.software = req.headers['user-agent']
   
   res.send(returnObj) 
})

app.listen(8080, function() {
    console.log("Listening...");
})
