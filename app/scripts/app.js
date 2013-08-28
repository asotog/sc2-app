'use strict';

angular.module('sc2InfoApp', ['playerSearchServices', 'playerInfoServices'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/search_results.html',
        controller: 'SearchresultsCtrl'
    }).when('/player/search/:player/game/:game/region/:region/league/:league/:ladder', {
        templateUrl: 'views/search_results.html',
        controller: 'SearchresultsCtrl'
    }).when('/player/info/:id', {
        templateUrl: 'views/player_info.html',
        controller: 'PlayerinfoCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});