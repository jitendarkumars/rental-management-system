var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
app = express();
var port = process.env.PORT || 4200; 
app.use(express.static('dist/rental-management-system'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.get('/*', function(req, res) {
    try{
        res.sendFile(__dirname + '/dist/rental-management-system/index.html');       
    }
    catch(err){
        console.log("Cannot Read from DIST")      
    }
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(express.static(path.join(__dirname, 'dist')));
app.listen(port, '0.0.0.0');
