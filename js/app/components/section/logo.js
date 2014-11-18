app.directive("logoSection", ["wheel", "$timeout", function(wheel, $timeout) {
    return {
        replace: true,
        templateUrl: "/view/section/logo.html",
        scope : {

        },
        link: function(scope, element, attrs) {
        }
    };
}]);