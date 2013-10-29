'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
    'ngRoute',
    'app.filters',
    'app.services',
    'app.directives',
    'app.controllers',
    'ui.bootstrap',
    'ldap.services',
]);

app.value('ldapURI', '//jvillbrandt-ubuntu:8008');
app.value('taskURI', '//jvillbrandt-ubuntu:8007');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/open-tasks', {templateUrl: '/static/partials/open-tasks.html', controller: 'TaskCtrl'});
    $routeProvider.when('/landing-page', {templateUrl: '/static/partials/landing-page.html', controller: 'VoteCtrl'});
    $routeProvider.when('/vote/:id', {templateUrl: '/static/partials/vote.html', controller: 'VoteCtrl'});
    $routeProvider.when('/closed-tasks', {templateUrl: '/static/partials/closed-tasks.html', controller: 'TaskCtrl'});
    $routeProvider.otherwise({redirectTo: '/landing-page'});
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);