angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope = angular.extend($scope, Links);
  $scope.getLinks();
  //console.log($scope.data.links)
});
