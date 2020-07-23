(function () {
    'use strict';
    angular.module('NameCalculator', [])
    
    .controller('NameCalculatorController', function($scope) {
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayValue = function() {
            var totalNameValue = nameCalcul($scope.name);
            $scope.totalValue = totalNameValue;
        }

        function nameCalcul (string) {
            var sum = 0;
            for (var i = 0; i<string.length; i++) {
                sum += string.charCodeAt(i);
            }
            return sum;
        }
    });
})();