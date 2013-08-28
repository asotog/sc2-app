'use strict';

angular.module('playerInfoServices',  ['ng', 'ngResource']).factory('PlayerInfo', function ($resource) {
   var playerInfoUrl = {
        dev: '../test/dummy_responses/playerinfo.json',
        stg: '/github/starcraft-api/Starcraft-2-Profiles-API/api/v2/player/info/:id/',
        prd: ''
    };
    return $resource(playerInfoUrl.dev, {}, {
        query: {
            method: 'GET',
            isArray: false
        }
    });
});
