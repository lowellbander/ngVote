'use strict';

//http://docs.angularjs.org/tutorial/step_11
//http://docs.angularjs.org/api/ngResource.$resource

/* Services */
var services = angular.module('app.services', ['ngResource']);

services.value('version', '0.1');

var tastypieDataTransformer = function ($http) {
    return $http.defaults.transformResponse.concat([
        function (data, headersGetter) {
            var result = data.objects;
            result.meta = data.meta;
            return result;
        }
    ])
};

//////////////////////////
/// Lowell's Additions ///
//////////////////////////

services.factory('Choices', ['$resource',
    function ($resource) {
        return $resource('static/data-json/array.json');
}]);

services.factory('Polls', ['$resource', 
    function ($resource) {
        return $resource('static/data-json/real.json');    
    }]);