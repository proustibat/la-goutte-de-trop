(function($) {
    // var socket = io.connect('/');
    var socket = io.connect(window.location.protocol+'//'+window.location.hostname+':'+window.location.port);

    socket.on('connect', function() {
        console.log('connect');
    });

    socket.on('error', function(data) {
        console.log(data || 'error');
    });

    socket.on('connect_failed', function(data) {
        console.log(data || 'connect_failed');
    });

    // $('#reset').on('click', function(e) {
    //     socket.emit('reset');
    // })

})(jQuery);
