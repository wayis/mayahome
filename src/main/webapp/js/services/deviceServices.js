angular.module('mayahomeApp')
	.factory('DeviceServices', function($http) {
		'use strict';
		return {
			list: function(success, error) {
				$http.get('data/devices.json').success(function(todos) {
					success(todos);
				}).error(error);
			}
		};
	});