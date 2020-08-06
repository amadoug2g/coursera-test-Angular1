(function (){
    'use strict';

    angular.module('ListCounter', [])

    .controller('ListCounterController', function($scope) {
        //Keeping track of the list
        $scope.input_list = "Test";

        //Handle the list by counting elements on call
        $scope.message = "Not Yet Available";
        $scope.counter = "";

        //Returning the text accordingly on click
        $scope.message = function (list) {
            var count = 0;
            count = list.split(",").length;
            $scope.counter = "test";
        }

        $scope.go = function() {

            $scope.msg = 'clicked';
          }

        function displayMessage(nbr) {
            if (nbr <4) {
                return "Enjoy!";
            } else {
                return "Too much!";
            }
        }

        function extractList(string) {}

        function errorCheck(list) {}
    })
})();