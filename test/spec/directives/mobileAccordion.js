'use strict';

describe('Directive: mobileAccordion', function () {
  beforeEach(module('sc2InfoApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<mobile-accordion></mobile-accordion>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the mobileAccordion directive');
  }));
});
