// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '580371245438334', // your App ID
        'clientSecret'  : 'cdff875a17de33d6997ffed2f05c4b64', // your App Secret
        'callbackURL'   : 'https://la-goutte-de-trop.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'Ro55GHS1RPZwLqqzJsTKTqZgH ',
        'consumerSecret'    : '37994YpIzY302CZZj5lkeKK7AfpIb4WNMWyCBDt7sk025iPeUs',
        'callbackURL'       : 'https://la-goutte-de-trop.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '62016788378-p9fvumv7da88av9tujmkudg78p18eo1v.apps.googleusercontent.com',
        'clientSecret'  : '9lRGkdMTHl6osXJczFEcBS0t',
        'callbackURL'   : 'https://la-goutte-de-trop.herokuapp.com/auth/google/callback'
    }

};
