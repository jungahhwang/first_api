var express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
var app = express()

var contents = [
    {
    id : 0,
    name : '안서후'
    },
    {
    id : 1,
    name : '안서준'
    },
    {
    id : 2,
    name : '황정아2'
    },
    {
        id : 3,
        name : 'john'
    },
    {
        id : 4,
        name : 'smith'
    },
    {
        id : 5,
        name : 'selly'
    }
]


// respond with "hello world" when a GET request is made to the homepage
app.get('/',  function(req, res)  {
  //res.send('hello world')
  res.json(contents);
})

app.listen(5000, () => console.log('listening on port 5000'));