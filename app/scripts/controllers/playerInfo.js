'use strict';

angular.module('sc2InfoApp')
  .controller('PlayerinfoCtrl', function ($scope, $routeParams, PlayerInfo) {
      $scope.player = {};
      PlayerInfo.get($routeParams, function(data) {
          $scope.player = {
              name: data.name,
              profile_image: data.image.url,
              x: (data.image.x >= 0) ? (data.image.x * -1) : data.image.x,
              y: (data.image.y >= 0) ? (data.image.y * -1) : data.image.y,
              season_games: data.gamesThisSeason,
              soloLeague: data.soloLeague,
              teamLeague: data.teamLeague
          };
      });
  });
