'use strict';

angular.module('playerSearchServices', ['ng', 'ngResource']).factory('PlayerSearch', function ($resource) {
    var playerSearchUrl = {
        dev: '../test/dummy_responses/searchresults.json',
        stg: '/github/starcraft-api/Starcraft-2-Profiles-API/api/v2/player/search',
        prd: ''
    };
    return $resource(playerSearchUrl.dev, {}, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});