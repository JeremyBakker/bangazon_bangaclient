angular.module('BangaClient').controller('ProductDetailController', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory',
  '$routeParams', 
  function ($scope, $http, $location, RootFactory, $routeParams) {

    RootFactory.getApiRoot()
      .then(
        root => 
          $http({
            method: "GET",
            url: `${root.products}${$routeParams.id}/`,
            headers: {
              'Authorization': "Token " + RootFactory.getToken()
            }
          })
          .then(
            res => {$scope.product = res.data,
            console.log("$scope.product", $scope.product);}),
            err => console.log,
        err => console.log
      );
  }
]);