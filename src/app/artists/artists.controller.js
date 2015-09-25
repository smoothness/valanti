(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistsController', ArtistsController);

  // ArtistsController.$inject = [''];

  function ArtistsController(ArtistsModel, ENDPOINT_URI) {

    var ctrl = this;

    ctrl.loaded = false;
    ctrl.baseUri = ENDPOINT_URI;

    ctrl.getArtists = function() {
      ArtistsModel.all()
        .then(function(result) {
          ctrl.artists = (result !== 'null') ? result : {};
          ctrl.loaded = true;
        });
    };

    ctrl.getArtists();

  }

})();