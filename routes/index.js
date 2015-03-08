/*
    GET /
*/
var items = [{
    title: 'Home',
    href: "/"
}, {
    title: 'About',
    href: "/about"
}];

exports.home = function(request, response) {
    response.render('home.html', {
        menu: items,
        welcomeMessage: "Yeah it's home!"
    });
}

exports.about = function(request, response) {
    response.render('about.html', {
        menu: items,
        description: "Yeahhhhh"
    });
}
