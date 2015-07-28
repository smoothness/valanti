(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistDetailController', ArtistDetailController);

  /** @ngInject */
  function ArtistDetailController(MainTiles, currArtist, $rootScope, $stateParams) {
    var adc = this;
    adc.baseURL = $rootScope.baseURL;
    adc.artist = currArtist.getCurrArtist();
    var artistId = adc.artist.idArtista;

// console.log(adc.artist.idArtista);
    MainTiles.tilesByArtist(artistId).success(function(data) {
      adc.tiles = data;
    });
  }

})();
