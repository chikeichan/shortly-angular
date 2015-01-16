angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {
    links: []
  };

  $scope.getLinks = function(){
    $http.get('/api/links')
      .success(function(data,status,headers,config){
        $scope.data.links = $scope.data.links.concat(data);
        return data;
      })
  };

  $scope.getLinks();
});
