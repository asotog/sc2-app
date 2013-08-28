'use strict';

describe('Service: PlayerInfo', function () {

  // load the service's module
  beforeEach(module('sc2InfoApp'));

  // instantiate service
  var PlayerInfo;
  beforeEach(inject(function (_PlayerInfo_) {
    PlayerInfo = _PlayerInfo_;
  }));

  it('should do something', function () {
    expect(!!PlayerInfo).toBe(true);
  });

});
