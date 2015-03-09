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
        title: "La Goutte de Trop : qu'est-ce que c'est ?",
        bodyClass: "page-home",
        introduction_fr_FR : "Une application de groupe pour illustrer le proverbe \"C'est la goutte d'eau qui fait déborder le vase\""
    },

    loginhome: {
        title: "Authentication",
        bodyClass: "page-loginhome"
    }


};
