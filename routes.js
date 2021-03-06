// This file handles the routes of the app.
// It is required by app.js

var globalData = require('./data.js');

module.exports = function(app, passport, router) {

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
            layoutData: globalData.layout,
            pages: globalData.pages,
            data: globalData.home
        });
    });


    // =====================================
    // ABOUT PAGE ==========================
    // =====================================
    router.get('/about', function(request, response) {
        response.render('about', {
            page: request.url,
            layoutData: globalData.layout,
            pages: globalData.pages
        });
    });


    // =====================================
    // LOGIN PAGE HOME (with login links) ==
    // =====================================
    router.get('/goutte-moi-ca',avoirdIfLogged, function(req, res) {
        // show the home page (will also have our login links)
        res.render('loginhome', {
            page: req.url,
            layoutData: globalData.layout,
            pages: globalData.pages,
            data: globalData.loginhome
        });
    });


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the loggedProtect function)
    router.get('/profile', loggedProtect, function(req, res) {
        res.render('profile', {
            page: req.url,
            layoutData: globalData.layout,
            pages: globalData.pages,
            data: globalData.profile,
            user: req.user // get the user out of session and pass to template
        });
    });


    // =====================================
    // APPLICATION PAGE PAGE ===============
    // =====================================
    router.get('/app', loggedProtect, function(request, response) {
        response.render('application', {
            page: request.url,
            layoutData: globalData.layout,
            pages: globalData.pages,
            data: globalData.app
        });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    // =====================================
    // LOGIN FORM ==========================
    // =====================================
    router.get('/login', function(req, res) {
        res.render('loginform', {
            page: req.url,
            layoutData: globalData.layout,
            pages: globalData.pages,
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // SIGNUP FORM =========================
    // =====================================
    // show the signup form
    router.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup', {
            page: req.url,
            layoutData: globalData.layout,
            pages: globalData.pages,
            message: req.flash('message')
        });
    });
    // process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: false // allow flash messages
    }));


    // =====================================
    // FACEBOOK CONNECT ====================
    // =====================================
    // send to facebook to do the authentication
    router.get('/auth/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }));

    // handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // =====================================
    // TWITTER CONNECT =====================
    // =====================================
    // send to twitter to do the authentication
    router.get('/auth/twitter', passport.authenticate('twitter', {
        scope: 'email'
    }));

    // handle the callback after twitter has authenticated the user
    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // =====================================
    // GOOGLE CONNECT ======================
    // =====================================
    // send to google to do the authentication
    router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // the callback after google has authenticated the user
    router.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // ===================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT)
    // ===================================================

    // LOCALLY --------------------------------
    router.get('/connect/local', function(req, res) {
        res.render('connect-local', {
            message: req.flash('loginMessage')
        });
    });
    router.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: false // allow flash messages
    }));

    // FACEBOOK -------------------------------
    // send to facebook to do the authentication
    router.get('/connect/facebook', passport.authorize('facebook', {
        scope: 'email'
    }));
    // handle the callback after facebook has authorized the user
    router.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // TWITTER --------------------------------
    // send to twitter to do the authentication
    router.get('/connect/twitter', passport.authorize('twitter', {
        scope: 'email'
    }));
    // handle the callback after twitter has authorized the user
    router.get('/connect/twitter/callback',
        passport.authorize('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // GOOGLE ---------------------------------
    // send to google to do the authentication
    router.get('/connect/google', passport.authorize('google', {
        scope: ['profile', 'email']
    }));
    // the callback after google has authorized the user
    router.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // ===================================================
    // UNLINK ACCOUNTS ===================================
    // ===================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    // LOCAL -----------------------------------
    router.get('/unlink/local', loggedProtect, function(req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // FACEBOOK -------------------------------
    router.get('/unlink/facebook', loggedProtect, function(req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // TWITTER --------------------------------
    router.get('/unlink/twitter', loggedProtect, function(req, res) {
        var user = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // GOOGLE ---------------------------------
    router.get('/unlink/google', loggedProtect, function(req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });
};

// route middleware to make sure a user is logged in
function loggedProtect(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/goutte-moi-ca');
}

// route middleware to redirect user on main app if he is logged in
function avoirdIfLogged(req, res, next) {
    console.log("REDIRECT IF LOGGED");
    if (req.isAuthenticated()) {
        console.log("L'utilisateur est loggué");
        // user is authenticated he can go directly on the application page
        res.redirect('/profile');
    }
    else {
        console.log("l'utilisateur n'est pas loggué");
        return next();
    }
}

