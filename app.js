// Require
var express = require('express');

// Express
var app = express();

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.set('port', port);
app.use(express.static(__dirname + '/public'));



// Configure
// app.use(express.static(__dirname + '/public'));
// app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
    response.render('index');
});

// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
