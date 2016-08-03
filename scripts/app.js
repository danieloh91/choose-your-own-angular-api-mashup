angular
    .module('weatherPlaylistApp', ['ngRoute'])
    .config(config);


////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/weatherplaylist.html',
      controller: 'WeatherPlaylistController',
      controllerAs: 'weatherPlaylistCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
