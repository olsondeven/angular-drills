angular.module('myApp').controller('mainCtrl', function($scope,mainSrc){

  $scope.getStarWarsCharacters = function(){
    mainSrc.getStarWarsCharacters()
    .then(function(webResponse){
      $scope.characters = webResponse;
      console.log(webResponse);
    });
  };
  $scope.getStarWarsCharacters();


});//closing brackets
