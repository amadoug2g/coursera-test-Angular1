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

    function DIController ($scope){
        $scope.list = "Apples";
        $scope.output = "";
        $scope.listSize = 1;
        $scope.msg = "";

        $scope.processInput = function() {
            getInput();
            makeList();
            displayMessage();
        }

        /**
         * Retrieves elements from field
         */
        function getInput() {
            var temp = $scope.list;
            $scope.text = temp;
        }

        /**
         * Creates a list from the user's input
         */
        function makeList() {
            var sortedList = $scope.list;
            sortedList = sortedList.split(',')
            sortedList = emptyCheck(sortedList);
            $scope.output = sortedList;
            $scope.listSize =  sortedList.length;            
        }

        /**
         * Displays the message after checking user's input
         */
        function displayMessage() {
            if ($scope.listSize > 0 && $scope.listSize < 4) {
                $scope.msg = "Enjoy!";
            } else {
                $scope.msg = "Too Much!";
            }
        }

        /**
         * Gets rid of null and empty elements from the array
         * @param {array} list Array of elements from user input
         */
        function nullCheck (list) {
            var trimmedList = list.filter(Boolean);
            return trimmedList;
        }

        /**
         * Gets rid of elements containing nothing but space from the array
         * @param {array} list Array of elements from user input
         */
        function emptyCheck (list) {
            var trimmedList = list.filter(function(el) { 
                return el.trim(); 
            });

            nullCheck(trimmedList);
            return trimmedList;
        }
    }
})();