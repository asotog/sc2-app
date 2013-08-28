'use strict';

describe('Controller: PlayerinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('sc2InfoApp'));

  var PlayerinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerinfoCtrl = $controller('PlayerinfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
