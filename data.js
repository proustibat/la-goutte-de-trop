// This file handles global data of the app.
// It is required by app.js

module.exports = {

    layout: {
        title : "La goutte de trop",
        footer: "© Copyright 2015 La Goutte de trop"
    },

    pages : [{
        title: "Home",
        href: "/",
        isMenuItem: false
    }, {
        title: 'Goutte moi ça',
        href: "/goutte-moi-ca",
        isMenuItem: true
    }
    // , {
    //     title: 'Hello Machine',
    //     href: "/hello/machine",
    //     bodyClass: "page-hello",
    //     isMenuItem: true
    // }
    , {
        title: 'About',
        href: "/about",
        isMenuItem: true
    }, {
        title: 'Authentication',
        href: "/login",
        isMenuItem: false
    }, {
        title: 'Logout',
        href: "/logout",
        isMenuItem: false
    }, {
        title: 'profile',
        href: "/profile",
        isMenuItem: false
    }],


    home : {
        title: "The Last Straw : qu'est-ce que c'est ?",
        bodyClass: "page-home",
        introduction_en_US : "A collaborative application illustrating the idiom \"It is the last straw that breaks the camel's back\" in real life context.",
        introduction_fr_FR : "Une application collaborative pour illustrer le proverbe \"C'est la goutte d'eau qui fait déborder le vase\""
    },

    loginhome: {
        title: "Authentication",
        bodyClass: "page-loginhome"
    }


};
