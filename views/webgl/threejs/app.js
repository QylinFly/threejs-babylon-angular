'use strict';

angular.module('angularjsThreejsApp', ["webglModelViewer"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/webgl/threejs/index.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
