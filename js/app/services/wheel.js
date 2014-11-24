app.factory("wheel", ["$window", "$timeout", "$rootScope", function($window, $timeout, $rootScope) {

    var callbacks = [];
    var position = 0;

    function notify() {
        callbacks.forEach(function(cb) {
            cb(position);
        })
    }

    var disabled;
    function step(direction) {
        if(disabled)
            return;
        console.log(direction)
        disabled = true;
        position += direction;

        if(position < 0)
            position = 0;

        console.log(position)
        notify();
        $timeout(function() {
            disabled = false;
        }, 1000);
        $rootScope.$apply();
    }

    var y = 0;
    var direction = 0;
    window.addEventListener("touchmove", function(e) {
        direction = Math.sign(y - e.touches[0].clientY);
        console.log(e);
        e.preventDefault();
    }, false)

    window.addEventListener("touchstart", function(e) {
        y = e.touches[0].clientY;
        console.log(e);
        e.preventDefault();
    }, false)

    window.addEventListener("touchend", function(e) {
        console.log(e);
        step(direction);
        e.preventDefault();
    }, false)

    $window.addEventListener("mousewheel", function(e) {
        step(-Math.sign(e.wheelDelta));
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