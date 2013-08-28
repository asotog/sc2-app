'use strict';

describe('Service: PlayerSearch', function () {

  // load the service's module
  beforeEach(module('sc2InfoApp'));

  // instantiate service
  var PlayerSearch;
  beforeEach(inject(function (_PlayerSearch_) {
    PlayerSearch = _PlayerSearch_;
  }));

  it('should do something', function () {
    expect(!!PlayerSearch).toBe(true);
  });

});
