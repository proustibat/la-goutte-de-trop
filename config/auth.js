// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '580371245438334', // your App ID
        'clientSecret'  : 'cdff875a17de33d6997ffed2f05c4b64', // your App Secret
        'callbackURL'   : 'https://last-straw.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'Ro55GHS1RPZwLqqzJsTKTqZgH ',
        'consumerSecret'    : '37994YpIzY302CZZj5lkeKK7AfpIb4WNMWyCBDt7sk025iPeUs',
        'callbackURL'       : 'https://last-straw.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '627922429672-qfdg8dkvjro5ivsp2dr57mpc99km1pnf.apps.googleusercontent.com',
        'clientSecret'  : 'KQ05lses6npxOdaf4pX0yxsh',
        'callbackURL'   : 'https://last-straw.herokuapp.com/auth/google/callback'
    }

};
