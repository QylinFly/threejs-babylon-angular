'use strict';

angular.module('angularjsBabylonApp', ["webglModelViewer"])
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
