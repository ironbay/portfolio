app.directive("skillsSection", ["wheel", "$timeout", function(wheel, $timeout) {
    return {
        replace: true,
        templateUrl: "/view/section/skills.html",
        scope : {

        },
        link: function(scope, element, attrs) {

            wheel.step(function(i) {
                if(i==2)
                    scope.active = true;
            })
        }
    };
}]);