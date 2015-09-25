(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistDetailController', ArtistDetailController);

  // ArtistDetailController.$inject = ['dependencies'];

  function ArtistDetailController(ArtistsModel, $stateParams, ENDPOINT_URI) {
    
    var ctrl = this;
    var artistId = $stateParams.id;

    ctrl.loaded = false;
    ctrl.baseUri = ENDPOINT_URI;

    // get artist serviec
    ctrl.getArtist = function() {
      ArtistsModel.fetch(artistId)
        .then(function(result) {
          ctrl.artist = (result !== 'null') ? result[0] : {};
          ctrl.loaded = true;
        });
    };

    // get pieces by artist
    ctrl.getPiecesByArtist = function() {
      ArtistsModel.fetch(artistId)
        .then(function(result) {
          ctrl.artist = (result !== 'null') ? result[0] : {};
          ctrl.loaded = true;
        });
    };

    ctrl.getArtist();

  }

})();