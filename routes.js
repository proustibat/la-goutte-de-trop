// This file handles the routes of the app.
// It is required by app.js
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
        // show the home page (will also have our login links)
        res.render('loginhome', {
            page: req.url,
            data: data
        });
    });


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
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
        res.render('profile', {
            page: req.url,
            data: menu,
            user: req.user // get the user out of session and pass to template
        });
    });


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    // =====================================
    // LOGIN FORM ==========================
    // =====================================
    app.get('/login', function(req, res) {
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
        res.render('loginform', {
            page: req.url,
            data: menu,
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // SIGNUP FORM =========================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {
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
        // render the page and pass in any flash data if it exists
        res.render('signup', {
            page: req.url,
            data: data,
            message: req.flash('message')
        });
    });
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: false // allow flash messages
    }));


    // =====================================
    // FACEBOOK CONNECT ====================
    // =====================================
    // send to facebook to do the authentication
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // =====================================
    // TWITTER CONNECT =====================
    // =====================================
    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', {
        scope: 'email'
    }));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // =====================================
    // GOOGLE CONNECT ======================
    // =====================================
    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // ===================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT)
    // ===================================================

    // LOCALLY --------------------------------
    app.get('/connect/local', function(req, res) {
        res.render('connect-local', {
            message: req.flash('loginMessage')
        });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: false // allow flash messages
    }));

    // FACEBOOK -------------------------------
    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', {
        scope: 'email'
    }));
    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // TWITTER --------------------------------
    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', {
        scope: 'email'
    }));
    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
        passport.authorize('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // GOOGLE ---------------------------------
    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', {
        scope: ['profile', 'email']
    }));
    // the callback after google has authorized the user
    app.get('/connect/google/callback',
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
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // FACEBOOK -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // TWITTER --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // GOOGLE ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

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
    console.log("===> isLoggedIn?");
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        console.log("-> YES");
        return next();
    }
    console.log("-> Not Logged");
    // if they aren't redirect them to the home page
    res.redirect('/');
}
