'use strict';

angular.module('angularjsBabylonApp')
    .controller('MainCtrl', function ($scope, $http) {

        //$http.get('models/Teapot.json').success(function(data) {
        //    return sphere;
        //});
        //$.post('Gulugulus/setMenu', {
        //    map: 'qq',
        //    test: 'test_lwp'
        //});

        $scope.assimpModelUrl = "models/jeep1.ms3d.json";
        $scope.changeModel = function () {
            if ($scope.assimpModelUrl == "models/interior.3ds.json") {
                $scope.assimpModelUrl = "models/jeep1.ms3d.json";
            }
            else {
                $scope.assimpModelUrl = "models/interior.3ds.json";
            }
        };
    });
