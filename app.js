var express = require('express');

const cors = require('cors');
const mysql = require('mysql')


// const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: '13.125.244.79',
    user: 'snowgirl0113',
    password: 'Junga113!',
    database: 'todo'
  });

connection.connect();

var contents = [
    {
    id : 0,
    name : 'java',
    done : true
    },
    {
    id : 1,
    name : 'html',
    done : true
    },
    {
    id : 2,
    name : 'javascript',
    done : true
    },
    {
        id : 3,
        name : 'css',
        done : false
    },
    {
        id : 4,
        name : 'html',
        done : true
    },
    {
        id : 5,
        name : 'css2',
        done : false
    },
    {
        id : 6,
        name : 'angular',
        done : false
    }
    ,
    {
        id : 7,
        name : 'angular1111',
        done : false
    },
    {
        id : 8,
        name : 'nexacro',
        done : true
    }
]


// respond with "hello world" when a GET request is made to the homepage
app.get('/',  function(req, res)  {
  //res.send('hello world')
  //res.json(contents);
  connection.query('SELECT * FROM TODO_LIST', (error, results) => {
    if (error) throw error;
    console.log('User info is:',results);
    res.send(results);
   // console.log('result1',results);
    });
})


//10.34.25.42/add?name=rksk
app.get('/add',  function(req, res)  {
    //res.send('hello world')
    //contents.push({id:contents.length+1, name:req.query.name, done:false});
    //res.json(contents);

   /* connection.query('INSERT INTO TODO_LIST ( [id:results.length+1, (error, results) => {
        if (error) throw error;
        console.log('User info is:',results);
        res.send(results);*/
    
    var sql = 'INSERT INTO TODO_LIST VALUES(?, ?, ?)';
    var params = [req.query.name,false]
    connection.query(sql, params, function(err, results, field){
        if(err){
            console.log(err);
        }
    })

    connection.query('SELECT * FROM TODO_LIST', (error, results) => {
        if (error) throw error;
        console.log('User info is:',results);
        res.send(results);
    });
 });


app.listen(5000, () => console.log('listening on port 5000'));