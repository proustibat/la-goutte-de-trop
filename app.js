// REQUIRE ======================================================================
// get all the tools we need
// var express = require('express');
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
// var globalData = require('./data.js');

// CONFIGURATION ===============================================================
mongoose.connect(configDB.url); // connect to our database
require('./config/passport')(passport); // pass passport for configuration
require('./config')(app);

// SESSION & PASSPORT ==========================================================
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'iyoudontlaughwhowill'
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// ROUTES ======================================================================
// apply the routes to our application
app.use('/', router);
//
require('./routes')(app, passport, router);

// LAUNCH ======================================================================
var server = app.listen(app.get('port'), function() {
    console.log("YEAH Your fuckin app is running on port:" + app.get('port'));
});

// SOCKET
var io = require('socket.io').listen(server);

// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// server.listen(80);

// io.set("transports", ["xhr-polling"]);
// io.set("polling duration", 20);

// io.sockets.on('connection', function(socket) {
// console.log('\ngot a new connection from: ' + io.id + '\n');
// });

var nsp = io.of('/about');
nsp.on('connection', function(socket) {
    console.log('SERVER RECEIVED CONNECTION YEP');
});
nsp.emit('hi', 'everyone!');

// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });
