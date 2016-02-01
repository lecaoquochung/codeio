'use strict';

angular.module('app.maps').directive('smartMap', function (Initializer) {
    var _mapsCounter = 0;
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            _mapsCounter++;
            Initializer.mapsInitialized.then(function(){
                scope.$on('$smartContentResize', function () {
                    var center = scope.map.getCenter();
                    google.maps.event.trigger(scope.map, "resize");
                    scope.map.setCenter(center); 
                });
            })
            
        }

    }
});