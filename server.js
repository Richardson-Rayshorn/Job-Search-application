var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => 
{
    res.write("Testing");
    res.end();
});

app.listen(port);
console.log("testing the server");