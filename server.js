var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => 
{
    res.render(index);
    res.end();
});

app.get('/listJobs', (req, res) => 
{
    res.write("Testing");
    res.end();
});

app.listen(port);
console.log("testing the server");