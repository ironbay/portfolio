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
                    image : "http://milee.co/v1/img/works/thumbnail/platter.jpg"
                },
                {
                    title : "Parrable Landing Page",
                    image : "http://milee.co/v1/img/works/thumbnail/whatsyourobject.jpg"
                },
                {
                    title : "Parrable Landing Page",
                    image : "http://milee.co/v1/img/works/thumbnail/platter.jpg"
                },
                {
                    title : "Parrable Landing Page",
                    image : "http://milee.co/v1/img/works/thumbnail/platter.jpg"
                },
                {
                    title : "Parrable Landing Page",
                    image : "http://milee.co/v1/img/works/thumbnail/platter.jpg"
                },
                {
                    title : "Parrable Landing Page",
                    image : "http://milee.co/v1/img/works/thumbnail/platter.jpg"
                },
                {
                    title : "Parrable Landing Page",
                    image : "http://milee.co/v1/img/works/thumbnail/platter.jpg"
                },
                {
                    title : "Parrable Analytics",
                    image : "/img/work/landing-page"
                },
            ];
        }
    };
}]);