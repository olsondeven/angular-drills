angular.module('myApp').service('mainSrc', function($http){

  this.getStarWarsCharacters = function(){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(webResponse){
      if(webResponse.status === 200){
        return webResponse.data.results;
      }
    });
  };

});//closing brackets
