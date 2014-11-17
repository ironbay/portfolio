app.directive("workSection", ["wheel", "$timeout", function(wheel, $timeout) {
    return {
        replace: true,
        templateUrl: "/view/section/work.html",
        scope : {

        },
        link: function(scope, element, attrs) {

            wheel.step(function(i) {
                if(i==3)
                    scope.active = true;
            })

            scope.works = [
                {
                    title : "Parrable Landing Page",
                    image : "/img/work/landing-page"
                },
                {
                    title : "Parrable Analytics",
                    image : "/img/work/landing-page"
                },
            ];
        }
    };
}]);