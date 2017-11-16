angular.module('meme', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http) {
    $scope.memes = [];
    $scope.addMeme = function() {
      if($scope.formContent === '') { return; }
      console.log("In addMeme with "+$scope.formContent);
      $scope.create({
        id: $scope.memes.length,
        image: $scope.formContent,
      });
      $scope.formContent = '';
    };
    $scope.getAll = function() {
      $http.get('/memes').success(function(data){
        angular.copy(data, $scope.memes);
      });
    };
    $scope.getAll();

    $scope.create = function(meme) {
      $http.post('/memes', meme).success(function(data){
        $scope.memes.push(data);
        $scope.getAll();
      });
    };

    $scope.delete = function(meme) {
      $http.delete('/memes/' + meme._id )
        .success(function(data){
          console.log("delete meme worked");
          $scope.getAll();
        });
    };

    $scope.removeAll = function(){
      $http.delete('/memes')
        .success(function(data){
          console.log("delete all worked");
          $scope.getAll();
        });      
    }
  }
]);
