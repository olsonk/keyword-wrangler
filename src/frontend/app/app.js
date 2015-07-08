'use strict';

(function() {
    var app = angular.module('app', ['ngRoute', 'ngGrid', 'restangular']);
    
    app.config(['$routeProvider', function($routeProvider) {
        // This makes KeywordsController handle the localhost:8080/#/ URL
        $routeProvider
        .when('/', {
            controller: 'KeywordsController',
            templateUrl: 'app/keywords/partials/editor.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    }]);
})();