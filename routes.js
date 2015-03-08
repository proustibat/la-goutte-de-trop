// This file handles the routes of the app.
// It is required by app.js

// Require
// var ejs = require('ejs');
// var partials = require('express-partials');
// var express = require('express');

module.exports = function(app, router, data) {

    // route middleware that will happen on every request
    router.use(function(request, response, next) {
        // log each request to the console
        console.log(request.method, request.url);
        // continue doing what we were doing and go to the route
        next();
    });

    // HOME
    router.get('/', function(request, response) {
        response.render('home', {data: data});
    });

    // about page route
    router.get('/about', function(request, response) {
        response.render('about', {data: data});
    });

    // route middleware to validate :name
    router.param('name', function(req, res, next, name) {
        // do validation on name here
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
};
