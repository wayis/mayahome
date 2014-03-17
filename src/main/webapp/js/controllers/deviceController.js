angular.module('mayahomeApp').controller('DevicesListCtrl', function ($scope, $http, DeviceServices) {
    DeviceServices.list(function(devices) {
        $scope.devices = devices;
    });
});