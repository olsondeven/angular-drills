angular.module('arrayApp').controller('arrayController', function($scope, arraySrc){

  $scope.getEmployees = function(){
    $scope.employees = arraySrc.getEmployees();
  };
  $scope.getEmployees();
});
