angular
.module('multiplyApp', [])
.controller('ResultsController', function($scope) {

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var newTest = function () {
        return {
            a: getRandomInt(100, 999),
            b: getRandomInt(0, 99),
            answer: null
        }
    };

    var hasCorrectAnswer = function (test) {
        return test.a * test.b == test.answer;
    };

    $scope.results = [];
    $scope.currentTest = null;

    $scope.$watch('currentTest.answer', function () {
        if (null == $scope.currentTest || hasCorrectAnswer($scope.currentTest)) {
          $scope.results.push(newTest());
          $scope.currentTest = $scope.results[$scope.results.length-1];
      }
    });
})
.directive('results', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/results.html'
    }
})
.directive('test', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/test.html'
    }
})