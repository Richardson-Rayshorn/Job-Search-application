var express = require("express");
var app = express();

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://username:password@locationofserver:port/nameofdatabasetoconnectto";
const pool = new Pool({connectionString: connectionString});

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => 
{
    res.render('index');
    res.end();
});

app.get('/listJobs', (req, res) => 
{
    // res.write("Testing");
    // console.log("test");
    getJobs((err, result) => 
    {
        if(err)
        {
            console.log(err);
        }
        console.log(JSON.stringify(result));
        var results = JSON.parse(JSON.stringify(result));
        res.render('jobs', {results});
        res.end();
    });
});


function getJobs(callback) 
{
    var sql = "SELECT title, descriptions, salary FROM jobs";

    pool.query(sql, function(err, result) 
    {
        if(err)
        {
            console.log(err);
        }
        callback(null, result.rows);
    });

}

app.get('/post', (req, res) => 
{
    res.render('postjobs');
    res.end();
});

app.post('/postJobs', (req, res) => 
{
   var title = req.body.jobTitle;
   var desc = req.body.jobDescription;
   var salary = req.body.salary;
   var terms = req.body.payment;

   var salaries = "$" + salary + " per " + terms;

   postJobs(title,desc,salaries, (err, result) => 
   {
        if(err)
        {
            console.log(err);
        }

        console.log(result);
   });
});

function postJobs(title,desc,salaries, callback) 
{
    var sql = "INSERT INTO jobs (title, descriptions, salary) VALUES ?";

    pool.query(sql,[title,desc,salaries], function(err, result) 
    {
        if(err)
        {
            console.log(err);
        }
        callback(null, result);
    })

}

app.listen(port);
console.log("testing the server");