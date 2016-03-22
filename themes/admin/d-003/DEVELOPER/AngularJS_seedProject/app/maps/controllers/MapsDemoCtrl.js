'use strict';

angular.module('app.maps').controller('MapsDemoCtrl', 
  function ($scope, $http, $q, SmartMapStyle, Initializer) {

    $scope.map = null;

    $scope.styles = SmartMapStyle.styles;

    $scope.setType = function (key) {
        SmartMapStyle.getMapType(key).then(function(type){
            $scope.map.mapTypes.set(key, type);
            $scope.map.setMapTypeId(key);
        });
        $scope.currentType = key;
    };


    

    Initializer.mapsInitialized
    .then(function(){
      return SmartMapStyle.getMapType('colorful')
    })
    .then(function() {
    
      $scope.map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: new google.maps.LatLng(23.89, -80.650),
          zoom: 5,
          scrollwheel: false,
          disableDefaultUI: true
      });
      $scope.setType('colorful')
    })


});