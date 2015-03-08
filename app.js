// Require
var ejs = require('ejs');
var partials = require('express-partials');
var express = require('express');
var routes = require('./routes/index.js');

// Express
var app = express();

var port = process.env.PORT || 5000;

app.use(partials());
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile); //renders .ejs as html
// app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.set('port', port);

app.get('/', routes.home);
app.get('/about', routes.about);


// Configure
// app.use(express.static(__dirname + '/public'));
// app.set('port', (process.env.PORT || 5000));


// app.get('/', function(request, response) {
    // response.render('index');
// });

// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.listen(app.get('port'), function() {
    console.log("Node app is running on port:" + app.get('port'));
});
