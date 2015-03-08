// This file handles the configuration of the app.
// It is required by app.js

// Require
var ejs = require('ejs');
var partials = require('express-partials');
var express = require('express');

module.exports = function(app){

    app.set('port', process.env.PORT || 5000);

    app.use(partials());

    // Set .html as the default template extension
    app.set('view engine', 'html');

    // Initialize the ejs template engine
    app.engine('html', ejs.renderFile);

    // Tell express where it can find the templates
    app.set('views', __dirname + '/templates');

    // Make the files in the public folder available to the world
    app.use(express.static(__dirname + '/public'));

    // app.set('view options', { layout:'layout.ejs' });
};
