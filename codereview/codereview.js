(function () {
	'use strict';

	var codeReviewApp = angular.module('codeReviewApp');

	codeReviewApp.factory('fooService', function ($http) {
		return {
			getAllFoos: function () {
				return $http.get('/foos');
			}
		};
	});

	codeReviewApp.controller('fooCtrl', function ($scope, fooService) {
		$scope.foos = [];

		fooService.getAllFoos().then(function (response) {
			$scope.foos = response.data.foos;
			$scope.$digest();
		});
	});
}());
