angular.module('mayahomeApp').controller('DashboardCtrl', function ($scope, $http, DeviceServices) {
    DeviceServices.list(function(devices) {
        $scope.devices = devices;
    }, function(error) {console.log("error: " + error)});

    // Roller-Shutter && Varying Light
    $scope.upDeviceValue = function(device) {
        if (device.value < 100) {
            device.value = device.value + 1;
        }
    }
    $scope.downDeviceValue = function(device) {
        if (device.value > 0) {
            device.value = device.value - 1;
        }
    }
});