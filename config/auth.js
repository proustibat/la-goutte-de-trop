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
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
