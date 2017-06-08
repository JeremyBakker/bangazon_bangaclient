angular.module('BangaClient').controller('ProductTypesController', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory', 
  function($scope, $http, $location, RootFactory) {
    $scope.product_types = [];

    RootFactory.getApiRoot()
      .then(
        root => 
          $http({
            method: "GET",
            url: `${root.product_type}`,
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            }
          })
          .then(
            res => {$scope.product_types = res.data.results;
            console.log("$scope.product_types", $scope.product_types);},
            err => console.log
          ),
        err => console.log
      );
  }
]);