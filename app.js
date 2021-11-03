var express = require('express');

const cors = require('cors');
const mysql = require('mysql')


const { allowedNodeEnvironmentFlags } = require('process');
var app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: '13.124.244.79',
    user: 'snowgirl113',
    password: 'Junga113!',
    database: 'todo'
  });

connection.connect();

connection.query('SELECT * FROM TODO_LIST', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log('result1',results);
});
    
connection.end();
/*
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
]*/


// respond with "hello world" when a GET request is made to the homepage
app.get('/',  function(req, res)  {
  //res.send('hello world')
  res.json(contents);
})

app.get('/add',  function(req, res)  {
    //res.send('hello world')
    contents.push({id:contents.length+1, name:req.query.name, done:false});
    res.json(contents);
 })


app.listen(5000, () => console.log('listening on port 5000'));