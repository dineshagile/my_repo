var mainApp = angular.module('mainApp',[])

mainApp.factory('MathFactory', function(){
    var factory = {};
    factory.multiply = function(a,b) {
        return a * b
    }
    return factory;
});

mainApp.service('CalcService', function(MathFactory){
    this.square = function(a) {
    return MathFactory.multiply(a,a);
    }
});

mainApp.controller('Ctrl', function($scope, CalcService){
    $scope.square = function() {
    $scope.result = CalcService.square($scope.number);
    }
});