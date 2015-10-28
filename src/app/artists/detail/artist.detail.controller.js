(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistDetailController', ArtistDetailController);

  ArtistDetailController.$inject = ['ArtistsModel', 'PiecesModel', '$stateParams', 'ENDPOINT_URI', '$modal'];

  function ArtistDetailController(ArtistsModel, PiecesModel, $stateParams, ENDPOINT_URI, $modal) {
    
    var ctrl = this;
    var artistId = $stateParams.id;
    
    ctrl.loaded = false;
    ctrl.baseUri = ENDPOINT_URI;

    // Modal instantiation
    ctrl.animationsEnabled = true;

    ctrl.open = function(item) {
      var modalInstance = $modal.open({
        animation: ctrl.animationsEnabled,
        templateUrl: 'app/components/modal/modal.html',
        controller: 'ModalController',
        size: 'lg',
        item: item,
        resolve: {
          item: function() {
            return item;
          }
        }
      });
    }

    // get artist serviec
    ctrl.getArtist = function() {
      ArtistsModel.fetch(artistId)
        .then(function(result) {
          ctrl.artist = (result !== 'null') ? result[0] : {};
          ctrl.loaded = true;
        });
    };

    ctrl.getArtist();

    // get pieces by artist
    ctrl.getPiecesByArtist = function() {
      PiecesModel.fetchByArtist(artistId)
        .then(function(result) {
          ctrl.piecesByArtist = (result !== 'null') ? result : {};
          ctrl.loaded = true;
        });
    };

    ctrl.getPiecesByArtist();

  }

})();