// This file handles the routes of the app.
// It is required by app.js

// Require
// var ejs = require('ejs');
// var partials = require('express-partials');
// var express = require('express');

module.exports = function(app, passport, router, data) {

    // route middleware that will happen on every request
    router.use(function(request, response, next) {
        // log each request to the console
        console.log(request.method, request.url);
        // continue doing what we were doing and go to the route
        next();
    });


    // =====================================
    // HOME PAGE ===========================
    // =====================================
    router.get('/', function(request, response) {
        response.render('home', {
            page: request.url,
            data: data
        });
    });


    // =====================================
    // ABOUT PAGE ==========================
    // =====================================
    router.get('/about', function(request, response) {
        response.render('about', {
            page: request.url,
            data: data
        });
    });

    // =====================================
    // LOGIN PAGE HOME (with login links) ==
    // =====================================
    app.get('/enter', function(req, res) {
        res.render('loginhome', {
            page: req.url,
            data: data
        });
    });


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('loginform', {
            page: req.url,
            data: data,
            message: req.flash('loginMessage')
        });
    });
    // process the login form
    // app.post('/login', do all our passport stuff here);


    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup', {
            page: req.url,
            data: data,
            message: req.flash('signupMessage')
        });
    });
    // process the signup form
    // app.post('/signup', do all our passport stuff here);


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user : req.user // get the user out of session and pass to template
        });
    });

    /*

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    */
    /*
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
    */
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
