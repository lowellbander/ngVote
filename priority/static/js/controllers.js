'use strict';

/* Controllers */

var controllers = angular.module('app.controllers', []);

controllers.controller('VoteCtrl', ['$scope', '$http', '$routeParams', 'Choices', 'Vote',
    function ($scope, $http, $routeParams, Choices, Vote) {
        $scope.majors = Vote.query(function () {
            $scope.majorNum = Number($routeParams.pollid);
            $scope.thisMajor = $scope.majors[$scope.majorNum]["name"];
            $scope.courseList = $scope.majors[$scope.majorNum]["courses"];
        }); // replace with get for a single major
    }]);

controllers.controller('LandingCtrl', ['$scope', '$http', 'Vote',
    function ($scope, $http, Vote) {
        $scope.majors = Vote.query();
    }]);

/////////////////////////////////
// Vestigial Beyond This Point //
/////////////////////////////////

controllers.controller('NavbarCtrl', ['$scope', '$http', '$location', 'Session',
    function ($scope, $http, $location, Session) {
        $scope.session = Session.session;
        $scope.logout = Session.logout;
        $scope.login = function () {
            Session.login($scope.username, $scope.password);
        };

        $scope.isNavbarActive = function (navBarPath) {
            return navBarPath === $location.path();
        };

        $scope.hasPendingRequests = function () {
            return $http.pendingRequests.length > 0;
        };
    }]);

var ModalInstanceCtrl = function ($scope, $modalInstance, task) {
    $scope.task = task;

    $scope.save = function () {
        $modalInstance.close($scope.task);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};