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
                    title : "Fybr",
                    image : "img/work/fybr.jpg",
                    link : "/work/fybr"
                },
                {
                    title : "Parrable",
                    image : "img/work/parrable.jpg",
                    border : true,
                    link : "https://www.parrable.com/"
                },
                {
                    title : "Hawk",
                    image : "img/work/hawk.jpg",
                    link : "/work/hawk"
                },
                {
                    title : "Art",
                    image : "http://pia.ink/img/works/yeezus.jpg",
                    link : "http://pia.ink"
                },
            ];
        }
    };
}]);