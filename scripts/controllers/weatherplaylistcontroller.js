angular
  .module('weatherPlaylistApp')
  .controller('WeatherPlaylistController', WeatherPlaylistController);

WeatherPlaylistController.$inject=['$http'];
function WeatherPlaylistController($http) {
  console.log("WeatherPlaylistController!");

  var vm = this;

  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/search?q=sunny&type=playlist'
  }).then(function successCallback(succ) {
    vm.playlists = succ.data.playlists.items;
    console.log(vm.playlists);
  }, function errorCallback(err) {
    console.log('error', err);
  });

}
