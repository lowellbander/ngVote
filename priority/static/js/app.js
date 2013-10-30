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
//app.value('taskURI', '//jvillbrandt-ubuntu:8007');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: '/static/partials/landing-page.html', controller: 'PollCtrl'});
    $routeProvider.when('/vote/:pollid', {templateUrl: '/static/partials/vote.html', controller: 'VoteCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);