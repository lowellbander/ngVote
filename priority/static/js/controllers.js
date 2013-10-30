'use strict';

/* Controllers */

var controllers = angular.module('app.controllers', []);

controllers.controller('VoteCtrl', ['$scope', '$http', '$routeParams', 'Polls',
    function ($scope, $http, $routeParams, Polls) {
        $scope.majors = Polls.query(function () {
            $scope.majorNum = Number($routeParams.pollid);
            $scope.thisMajor = $scope.majors[$scope.majorNum]["name"];
            $scope.courseList = $scope.majors[$scope.majorNum]["courses"];
        }); // replace with get for a single major
        $scope.vote = function (index) {
            $scope.majors[$scope.majorNum]["courses"][index]["votes"] = $scope.majors[$scope.majorNum]["courses"][index]["votes"] + 1
            // verbose because I'm ignorant as to how POST/PUT works,
            // so I figure I should start with something that references the original collection
            // instead of creating a new object
        };
    }]);

controllers.controller('PollCtrl', ['$scope', '$http', 'Polls',
    function ($scope, $http, Polls) {
        $scope.polls = Polls.query(); // get all
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