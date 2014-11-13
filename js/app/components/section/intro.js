app.directive("introSection", ["wheel", "$timeout", function(wheel, $timeout) {
    return {
        replace: true,
        templateUrl: "/view/section/intro.html",
        scope : {

        },
        link: function(scope, element, attrs) {

            wheel.step(function(i) {
                if(i==1) {
                    scope.active = true;    
                }
                scope.$apply();
            })
        }
    };
}]);