'use strict';

/* Controllers */

var controllers = angular.module('app.controllers', []);

controllers.controller('VoteCtrl', ['$scope', '$http',
    function ($scope, $http) {
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

        // $scope.choices = ['CS 31', 'CS 32', 'CS 33', 'CS 35L'];
        // $scope.choices = [];
        // $http.get('/static/js/data.json').success(function(data) {
        //     $scope.choices = data;
        // });
    }]);

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

controllers.controller('TaskCtrl', ['$scope', '$log', '$modal', 'Task', 'Session',
    function($scope, $log, $modal, Task, Session) {
        // testing single Task
        Task.get({taskID: 1}, function(task) {
            $log.log('single...');
            $log.log(task);
        });

        $scope.priority = 5;
        $scope.tasks = Task.all({}, function(data) {
            $log.log('all...', data);
        });

        $scope.open = function (taskID) {
            var task = {id: 'new', name:'', uid: null, position: null, completed: false}
            if(taskID != 'new') {
                //todo
            }

            var modalInstance = $modal.open({
                templateUrl: '/static/partials/edit-task.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    task: function () {
                        return task;
                    }
                }
            });

            modalInstance.result.then(function (task) {
                task.position = $scope.tasks.length + 1;
                $log.log(task);
                $scope.tasks.push(task);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }]);

/*angular.module('app.controllers', []).
    controller('EditTaskModalCtrl', ['$scope', '$modalInstance', 'task',
    function($scope, $modalInstance, task) {

        $scope.task = task;
        $scope.selected = {
            item: task
        };

        $scope.ok = function () {
            $modalInstance.close(task);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);*/



var ModalInstanceCtrl = function ($scope, $modalInstance, task) {
    $scope.task = task;

    $scope.save = function () {
        $modalInstance.close($scope.task);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};