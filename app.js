// Require
var ejs = require('ejs');
var partials = require('express-partials');
var express = require('express');

// Express
var app = express();


// Configuration
app.set('port', process.env.PORT || 5000);
app.use(partials());
app.use(express.static(__dirname + '/public'));
app.engine('html', ejs.renderFile); //renders .ejs as html
app.set('views', __dirname + '/templates');
// app.set('view engine', 'ejs');
// app.set('view options', { layout:'layout.ejs' });

// ROUTES
var items = [{
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
// instance of router
var router = express.Router();


// route middleware that will happen on every request
router.use(function(request, response, next) {

    // log each request to the console
    console.log(request.method, request.url);

    // continue doing what we were doing and go to the route
    next();
});

// home page route
router.get('/', function(request, response) {
    response.render('home.html', {
        menu: items,
        welcomeMessage: "Yeah it's home!"
    });
});

// about page route
router.get('/about', function(request, response) {
    response.render('about.html', {
        menu: items,
        description: "Yeahhhhh"
    });
});

// route middleware to validate :name
router.param('name', function(req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next();
});
// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});

app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

app.use('/', router);



app.listen(app.get('port'), function() {
    console.log("Node app is running on port:" + app.get('port'));
});

// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });
