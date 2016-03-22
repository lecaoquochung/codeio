"use strict";

angular.module('app.tables', [ 'ui.router']);

angular.module('app.tables').config(function ($stateProvider) {

    $stateProvider
        .state('app.tables', {
            abstract: true,
            data: {
                title: 'Tables'
            }
        })

        .state('app.tables.normal', {
            url: '/tables/normal',
            data: {
                title: 'Normal Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/tables/views/normal.html"

                }
            }
        })

        .state('app.tables.datatables', {
            url: '/tables/datatables',
            data: {
                title: 'Data Tables'
            },
            views: {
                "content@app": {
                    templateUrl: "app/tables/views/datatables.html"
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ])

                }
            }
        })

        .state('app.tables.jqgrid', {
            url: '/tables/jqgrid',
            data: {
                title: 'Jquery Grid'
            },
            views: {
                "content@app": {
                    controller: 'JqGridCtrl',
                    templateUrl: "app/tables/views/jqgrid.html"
                }
            },
            resolve: {
                srcipts: function(lazyScript){
                    return lazyScript.register([
                        'smartadmin-plugin/legacy/jqgrid/js/minified/jquery.jqGrid.min.js',
                        'smartadmin-plugin/legacy/jqgrid/js/i18n/grid.locale-en.js'
                    ])

                }
            }
        })
});