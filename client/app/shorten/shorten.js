angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    var url = $location.path();
    if(Links.isValidUrl($scope.newLink)){
      $http.post('/api/links', {url: $scope.newLink})
        .success(function(data,status,headers,config){

        })
    } else {
      console.log('Link is not valid');
    }

    $scope.newLink = '';
  };
});
