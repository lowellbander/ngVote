'use strict';

/* Controllers */

var controllers = angular.module('app.controllers', []);

controllers.controller('VoteCtrl', ['$scope', '$http', 'Choices',
    function ($scope, $http, Choices) {
        $scope.testval = "Sanity Check Complete";
        $scope.testArray = ["one", "blue", 'opera'];
        $http.get('static/data-json/single-object.json').success(
            function(data) {
                $scope.testObj = data;
            });
        $http.get('static/data-json/array.json').success(
            function(data) {
                $scope.array = data;
            });
        $scope.vote = function(index) {
            $scope.array[index].count = $scope.array[index].count + 1;

            $scope.myData[index].count = $scope.myData[index].count + 1;
            //POST or PUT new count (probably the entire JSON obj tho)
            //save() the single object
            Choices.save($scope.myData[index]); //doesn't work, need a server that serves the JSON
            /*   POST http://0.0.0.0:8000/static/data-json/array.json 405 (METHOD NOT ALLOWED)    */

            //get() the updated object (necessary?)
        };
        $scope.myData = Choices.query();
    }]);

controllers.controller('LandingCtrl', ['$scope', '$http', 
    function ($scope, $http) {
        $scope.lowell = "test success!";
        $scope.subjects = [{
            "id" : 0,
            "name" : "Computer Science"
        },
        {
            "id" : 1,
            "name" : "Mathematics"
        },{
           "id" : 2,
            "name" : "Physics" 
        }];
        $scope.getURL = function(subject) {
            return "/vote/:" + subject.id;
        };
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