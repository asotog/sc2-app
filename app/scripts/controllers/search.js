'use strict';

angular.module('sc2InfoApp')
    .controller('SearchCtrl', function ($scope, $location) {
    $scope.search = {
        player: '',
        game: 'hots',
        region: 'global',
        league: 'all',
        ladder: '1v1'
    };
    /* Redirect search to search results */
    $scope.doSearch = function () {
        $location.path('/player/search/' + $scope.search.player + '/game/' + $scope.search.game
                    + '/region/' + $scope.search.region
                      + '/league/' + $scope.search.league
                      + '/' + $scope.search.ladder);
    }
});