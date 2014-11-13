app.factory("wheel", ["$window", "$timeout", function($window, $timeout) {

    var callbacks = [];
    var position = 0;

    function notify() {
        callbacks.forEach(function(cb) {
            cb(position);
        })
    }

    var disabled;
    $window.addEventListener("mousewheel", function(e) {
        if(disabled)
            return;
        disabled = true;
        position += -Math.sign(e.wheelDelta);

        if(position < 0)
            position = 0;

        console.log(position)
        notify();
        $timeout(function() {
            disabled = false;
        }, 1000)
    }, false);

    $timeout(function() {
        notify();
    }, 1000)

    return {
        step : function(cb) {
            callbacks.push(cb);
        }
    }

}])