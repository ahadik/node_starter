require('babel-core/register');
require('source-map-support').install();

var express = require('express'),
    cfenv = require('cfenv'),
    path = require('path'),
    bodyParser = require('body-parser'),
    hello_world = require('./modules/hello-world'), //for demonstration purposes only
    fs;

var app = express(),
    appEnv = cfenv.getAppEnv();

app.use(express.static(path.join(__dirname, 'public')));
//app.set(path.join('views', __dirname, '/apps'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('index.html');
})

app.listen(3000, function() {
    console.info('Server listening on port ' + this.address().port);
});
