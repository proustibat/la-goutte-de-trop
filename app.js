// REQUIRE
var express = require('express');


// EXPRESS
var app = express();
var router = express.Router();


// CONFIGURATION
require('./config')(app);


// ROUTES
var data = [{
    title: 'Home',
    href: "/"
}, {
    title: 'About',
    href: "/about"
}, {
    title: 'Login',
    href: "/login"
}, {
    title: 'Hello Machine',
    href: "/hello/machine"
}];

require('./routes')(app, router, data);
app.use('/', router);

// LISTEN
var server = app.listen(app.get('port'), function() {
    console.log("Node app is running on port:" + app.get('port'));
});

// SOCKET
var io = require('socket.io').listen(server);
// io.set("transports", ["xhr-polling"]);
// io.set("polling duration", 20);

io.sockets.on('connection', function (socket) {
    console.log('\ngot a new connection from: ' + socket.id + '\n');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
