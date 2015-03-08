/*
    GET /
*/
exports.home = function(request, response) {
    response.render('home.html');
}

exports.about = function(request, response) {
    response.render('about.html');
}
