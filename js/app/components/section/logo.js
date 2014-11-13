app.directive("logoSection", ["wheel", "$timeout", function(wheel, $timeout) {
    return {
        replace: true,
        templateUrl: "/view/section/logo.html",
        scope : {

        },
        link: function(scope, element, attrs) {

            wheel.step(function(i) {
                if(i==0)
                    element.addClass("active");
            })
        }
    };
}]);