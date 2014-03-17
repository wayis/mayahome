angular.module('mayahomeApp').controller('DashboardCtrl', function ($scope, $http, DeviceServices) {
    DeviceServices.list(function(devices) {
        $scope.devices = devices;
    });
});