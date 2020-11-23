var express = require('express');
var chalk = require('chalk');
var path = require('path');
require('dotenv').config();


var app = express();

app.use(express.static(path.join(__dirname , "/public/")));

app.get('/',function(req,res){
    res.sendFile( path.join(__dirname,"views/index.html"));
});

app.listen(3000, function(res){
    //console.log(process.env.APP_PORT);
    console.log(`Listening on port ${chalk.green( `${process.env.APP_PORT}` || '3000')}`);
})