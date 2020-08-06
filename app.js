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

(function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    function DIController ($scope, $filter){
        $scope.name = "Amadou. C";
        $scope.text = "";
        $scope.output = "";
        $scope.outputLen = 1;
        $scope.msg = "Waiting";

        $scope.upper = function() {
            var upperCase = $filter('uppercase');
            $scope.name = upperCase($scope.name);
        }

        $scope.lower = function() {
            var lowerCase = $filter('lowercase');
            $scope.name = lowerCase($scope.name);
        }

        $scope.getText = function() {
            var temp = $scope.name;
            $scope.text = temp;
        }

        $scope.listElm = function() {
            var tmp = $scope.name;
            tmp = tmp.split(',')
            tmp = trimming2(tmp);
            $scope.output = tmp;
            $scope.outputLen =  tmp.length;            
        }

        $scope.message = function() {
            if ($scope.outputLen > 0 && $scope.outputLen < 4) {
                $scope.msg = "Enjoy!";
            } else {
                $scope.msg = "Too Much!";
            }
        }

        function trimming (list) {
            var trim = list.filter(Boolean);
            return trim;
        }

        function trimming2 (list) {
            //var trim = list.filter(function(el) { return el; });

            var trim = list.filter(function(el) { 
                return el.trim(); 
            });

            trimming(trim);
            return trim;
        }
    }
})();