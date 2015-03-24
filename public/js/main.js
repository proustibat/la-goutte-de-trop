(function($) {
    // var socket = io.connect('/');


    // var socket = io(window.location.protocol+'//'+window.location.hostname+':'+window.location.port+"/app");

    var socket = io.connect(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port);
    // console.log("socket address: "+window.location.protocol+'//'+window.location.hostname+':'+window.location.port+"/app");

    socket.on('connect', function() {
        console.log('connection to IO');
    });

    socket.on('error', function(data) {
        console.log(data || 'error');
    });

    socket.on('connect_failed', function(data) {
        console.log(data || 'connect_failed');
    });

})(jQuery);
