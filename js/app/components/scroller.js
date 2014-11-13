app.directive("scroller", ["wheel", "$timeout", function(wheel, $timeout) {
    return {
        link: function(scope, element, attrs) {

            var move = function(amount) {
                element.css("transform", "translate3d(0," + amount + "px,0)")
            }

            wheel.step(function(i) {
                if(i == 0) {
                    move(-200)
                    return;
                }

                if(i == 1) {
                    element.addClass("ready");
                }


                move(i * -element[0].clientHeight);
            })
        }
    };
}]);