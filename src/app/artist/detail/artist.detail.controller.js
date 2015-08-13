(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistDetailController', ArtistDetailController);

  /** @ngInject */
  function ArtistDetailController(MainTiles, currArtist, $rootScope, $stateParams) {
    var adc = this;
    adc.loaded = false;
    adc.baseURL = $rootScope.baseURL;
    adc.artist = currArtist.getCurrArtist();

    MainTiles.tilesByArtist($stateParams.id).success(function(data) {
      adc.tiles = data;
      adc.loaded = true;
    });
  }

})();
