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

	codeReviewApp.factory("barService", ["$http", function ($http) {
		return {
			getAllBars: function () {
				return $http.get("/bars");
			}
		}
	}]);

	codeReviewApp.controller('fooCtrl', function ($scope, fooService) {
		$scope.foos = [];

		fooService.getAllFoos().then(function (response) {
			$scope.foos = response.data.foos;
			$scope.$digest();
		});
	});

	codeReviewApp.controller("barCtrl", ["$scope", "barService", function (scope, bars) {
		scope.bars = [];

		bars.getAllBars().then(function (response) {
			scope.bars = response.data.bars;
			scope.$digest();
		});
	}]);
}());
