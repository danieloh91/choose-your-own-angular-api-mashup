angular
  .module('weatherPlaylistApp')
  .controller('WeatherPlaylistController', WeatherPlaylistController);

WeatherPlaylistController.$inject=['$http', '$routeParams'];
function WeatherPlaylistController($http, $routeParams) {
  var vm = this;

  vm.getPlaylists = function (query) {
    $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?type=playlist&q=' + query
    }).then(function successCallback(succ) {
      vm.playlists = succ.data.playlists.items;
    }, function errorCallback(err) {
      console.log('error', err);
    });
  };
}
