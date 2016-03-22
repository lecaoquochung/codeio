    "use strict";


    angular.module('app.maps', ['ui.router']);


    angular.module('app.maps').config(function ($stateProvider) {

        $stateProvider
            .state('app.maps', {
                url: '/maps',
                data: {
                    title: 'Maps'
                },
                views: {
                    "content@app": {
                        controller: 'MapsDemoCtrl',
                        templateUrl: 'app/maps/views/maps-demo.html'
                    }
                }
            })
    });