angular.module('myApp').controller('mainCtrl', function($scope, mainSrc){
  $scope.getEmployees = function(){
    $scope.employees = mainSrc.getEmployees();
  };
  $scope.getEmployees();
  console.log($scope.employees);
});
