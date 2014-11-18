app.directive('section', ["wheel", function(wheel) {
  return {
      restrict: 'E',
      link: function (scope, element, attributes) {
          var index = Array.prototype.slice.call(element.parent().children()).indexOf(element[0]);

          wheel.step(function(i) {
              if(i == index)
                element.addClass("active");
          })

      }
  };
}]);