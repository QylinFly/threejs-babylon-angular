'use strict';

angular.module('angularjsThreejsApp', ["tjsModelViewer"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/webgl/babylon/index.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
