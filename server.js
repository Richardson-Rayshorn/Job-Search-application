var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

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
    var sql = "SELECT id, title, descriptions, salary FROM jobs";

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
   var title = req.body.title;
   var desc = req.body.desc;
   var salary = req.body.salary;

   console.log(title, desc, salary);
//    res.write("testing");
//    res.end();
   postJobs(title,desc,salary, (err, result) => 
   {
        if(err)
        {
            console.log(err);
        }

        console.log(result);
        res.render("index");
        res.end();
   });
});

function postJobs(title,desc,salaries, callback) 
{
    var sql = "INSERT INTO jobs (title, descriptions, salary) VALUES ($1,$2,$3)";

    var values = [title, desc, salaries];

    pool.query(sql, values, function(err, result) 
    {
        if(err)
        {
            console.log(err);
        }
        callback(null, result);
    });

}

app.post('/accept', (req, res) => 
{
    var jobId = req.body.id;
    var acceptId;
    acceptCreate((err, results) => 
    {
        if(err)
        {
            console.log(err);
        }
        console.log(JSON.stringify(results));
        
        getAcceptId((err, result) => 
        {
            if(err)
            {
                console.log(err);
            }
            console.log(JSON.stringify(result));
            var acceptResult = JSON.parse(JSON.stringify(result));

            for (var i =0; i < acceptResult.length; i++)
            {
                console.log(acceptResult[i].id);
                acceptId = acceptResult[i].id
            }
            console.log(acceptId);
            updateJobAccept(acceptId, jobId, (err, result) => 
            {
                if (err)
                {
                    console.log(err);
                }

                console.log(result);
            });
        });
        res.end();
    });
});

function acceptCreate(callback)
{
    var sql = "INSERT INTO accepts (accepted) VALUES (TRUE)";
    
    pool.query(sql, (err, results) =>
    {
        if(err)
        {
            console.log(err);
        }
        callback(err, results);
    });
}

function getAcceptId(callback)
{
    var sql = "SELECT id, accepted from accepts ORDER BY id DESC LIMIT 1";

    pool.query(sql, (err, results) =>
    {
        if(err)
        {
            console.log(err);
        }
        callback(err, results.rows);
    });
}

function updateJobAccept(acceptId, jobId, callback)
{
    var sql = `UPDATE jobs SET accepts_id = ? WHERE jobs.id = ?`;
    var values = [acceptId, jobId];

    pool.query(sql, values, function(err, result) 
    {
        if(err)
        {
            console.log(err);
        }
        callback(null, result);
    });

}

app.listen(port);
console.log("testing the server");