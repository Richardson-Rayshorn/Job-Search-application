var express = require("express");
var app = express();

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://username:password@locationofserver:port/nameofdatabasetoconnectto";
const pool = new Pool({connectionString: connectionString});

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => 
{
    res.render('index');
    res.end();
});

app.get('/listJobs', (req, res) => 
{
    res.write("Testing");

    getJobs((error, result) => 
    {
        console.log("test");
        if(error)
        {
            console.log(error);
        }
        console.log(JSON.stringify(result))
    });
    res.end();
});

function getJobs(callback) 
{
    var sql = "SELECT title, description, salary FROM jobs";

    pool.query(sql, function(err, result) 
    {
        if(err)
        {
            console.log(err);
        }
        callback(null, result.rows);
    })
}

app.listen(port);
console.log("testing the server");