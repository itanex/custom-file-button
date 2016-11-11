(function () {
    'use strict';

    var module = angular.module('app');

    module.directive('customFile', Directive);

    Directive.$inject = [];

    function Directive() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: resolvePath('scripts/custom-file.html'),
            link: function (scope, element, attrs, controller) {
                scope.id = Number(new Date());
            }
        };
    }
})();
