angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links, Auth) {
  // Your code here
  $scope = angular.extend($scope, Links);
  $scope.getLinks();
  //console.log($scope.data.links)
}).

directive('linkWidget', function(){
  function link(scope, element, attrs) {

  };

  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'app/links/links.html',
  }
});
