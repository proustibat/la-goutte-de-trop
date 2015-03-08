// REQUIRE
var express = require('express');
var app = express();
var session = require('express-session');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var configDB = require('./config/database.js');

// CONFIGURATION
mongoose.connect(configDB.url); // connect to our database
// require('./config/passport')(passport); // pass passport for configuration
require('./config')(app);

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


// ROUTES
var menu = [{
    title: 'Home',
    href: "/"
}, {
    title: 'About',
    href: "/about"
}, {
    title: 'Enter',
    href: "/enter"
}, {
    title: 'Hello Machine',
    href: "/hello/machine"
}];

require('./routes')(app, passport, router, menu);
app.use('/', router);

// LISTEN
var server = app.listen(app.get('port'), function() {
    console.log("Node app is running on port:" + app.get('port'));
});

// SOCKET
var io = require('socket.io').listen(server);
// io.set("transports", ["xhr-polling"]);
// io.set("polling duration", 20);

io.sockets.on('connection', function(socket) {
    console.log('\ngot a new connection from: ' + socket.id + '\n');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
