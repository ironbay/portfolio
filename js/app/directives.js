app.directive("segment", function() {
    return function(scope, element, attr) {
        var root = element[0];
        console.log(root);
        var siblings = Array.prototype.slice.call(element.parent().children());
        var index =siblings.indexOf(root);
        //root.style.top = root.clientHeight * index + "px";
    }
})

app.directive("scroller", ["$timeout", function($timeout) {
    return function(scope, element, attr) {
        var height = element[0].clientHeight;
        var current = 0;
        $timeout(function() {
            element.addClass("ready");
        },1000)


    }
}]);