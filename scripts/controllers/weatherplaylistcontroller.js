angular
  .module('weatherPlaylistApp')
  .controller('WeatherPlaylistController', WeatherPlaylistController);

WeatherPlaylistController.$inject=['$http'];
function WeatherPlaylistController($http) {
  console.log("WeatherPlaylistController!");

  var vm = this;

  vm.sayHi = sayHi;

  ////

  function sayHi(name) {
    return "Hello " + name;
  }

}
