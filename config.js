// This file handles the configuration of the app.
// It is required by app.js

// Require
var ejs = require('ejs');
var partials = require('express-partials');
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.set('port', process.env.PORT || 5000);

    app.use(partials());

    // Initialize the ejs template engine
    app.engine('html', ejs.renderFile);

    // Tell express where it can find the templates
    app.set('views', __dirname + '/templates');

    // Set .html as the default template extension
    app.set('view engine', 'html');

    // Make the files in the public folder available to the world
    app.use(express.static(__dirname + '/public'));

    // app.set('view options', { layout:'layout.ejs' });

    // set up our express application
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({
        extended: true
    }));

};
