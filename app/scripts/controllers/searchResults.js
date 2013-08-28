'use strict';

angular.module('sc2InfoApp')
    .controller('SearchresultsCtrl', function ($scope, $location, $routeParams, PlayerSearch) {
    $scope.results = [];
    if ($routeParams.player) {
        $scope.results = PlayerSearch.query($routeParams, function(data) {
            $scope.results = data.results.players;
        });
    }
    /* on row clicked call this method with the player id */
    $scope.gotoPlayerInfo = function(id) {
        $location.path('/player/info/' + id);    
    }
});