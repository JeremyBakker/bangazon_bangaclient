angular.module('BangaClient').controller('ProductController', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory', 
  function($scope, $http, $location, RootFactory) {

    RootFactory.getApiRoot()
      .then(
        root => 
          $http({
            method: "GET",
            url: `${root.products}`,
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            }
          })
          .then(
            res => $scope.products = res.data.results,
            err => console.log
          )
        ,err => console.log
      );
  }
]);