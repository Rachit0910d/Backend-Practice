const express = require('express');

const app = express();

app.get('/', (req, res) =>{ 
    return res.end("This is home page. so somewhere else.");
});

app.get('/about', (req, res) =>{
    return res.end("this is about page. go to the home page.");
});

app.listen(8001, () => console.log("server started"));


