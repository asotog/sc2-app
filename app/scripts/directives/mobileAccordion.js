'use strict';

angular.module('sc2InfoApp')
    .directive('mobileAccordion', function () {
    return function (scope, element, attrs) {
        console.info('[mobileAccordion directive] ', scope.$eval(attrs.mobileAccordion));
        $(element).jquerySimpleAccordion({toggleButtonSelector: '.subtitle', itemContainerSelector: '.bd'});
    }
});