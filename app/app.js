// Create main Angular module
var app = angular.module('BangaClient', ['ngRoute'])
            .constant('apiUrl', "http://localhost:8000");

angular.module('BangaClient').config(
[
  '$interpolateProvider',
  '$routeProvider',
  '$httpProvider',
  function($interpolateProvider, $routeProvider, $httpProvider) {

    $interpolateProvider.startSymbol('((');
    $interpolateProvider.endSymbol('))');

    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $routeProvider
      .when('/', {
        controller: 'AuthController',
        templateUrl: 'partials/partial.login.html'
      })
      .when('/products', {
        controller: 'ProductController',
        templateUrl: 'partials/partial.products.html'
      })
      .when('/product_types', {
        controller: 'ProductTypesController',
        templateUrl: 'partials/partial.product_types.html'
      })
      .when('/register', {
        controller: 'AuthController',
        templateUrl: 'partials/partial.register.html'
      });

  }
]);

angular.module('BangaClient').factory('RootFactory', [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    let secure_token = null;

    return {
      getApiRoot () {
        return $http({
          url: apiUrl,
          headers: {
            'Authorization': "Token " + secure_token
          }
        }).then(res => res.data)
      },
      setToken (token) {
        secure_token = token
      },
      getToken () {
        return secure_token;
      }
    }
  }
]);