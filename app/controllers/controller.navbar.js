angular.module('BangaClient').controller('NavbarController', [
  '$scope', 
  '$http', 
  '$location', 
  'RootFactory',
  '$routeParams', 
  function ($scope, $http, $location, RootFactory, $routeParams) {

    $scope.getSearchValue = function() {
      console.log("click"),
      searchTerm = $("#searchboxInput").val(),
      console.log("searchTerm", searchTerm);
      RootFactory.getApiRoot()
        .then(
          root => 
            $http({
              method: "GET",
              url: `${root.products}?title=${searchTerm}`,
              headers: {
                'Authorization': "Token " + RootFactory.getToken()
              }
            })
            .then(
              res => {$scope.product = res.data,
              console.log("$scope.products", $scope.products);}),
              err => console.log,
          err => console.log
        );
    }
  }
]);