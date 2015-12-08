(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistDetailController', ArtistDetailController);

  ArtistDetailController.$inject = ['ArtistsModel', 'PiecesModel', '$stateParams', 'ENDPOINT_URI', '$modal', '$scope', 'MiscServices', '$rootScope', '$sce'];

  function ArtistDetailController(ArtistsModel, PiecesModel, $stateParams, ENDPOINT_URI, $modal, $scope, MiscServices, $rootScope, $sce) {

    $rootScope.title = 'Galería Valanti - Artistas';

    var ctrl = this;
    var artistId = $stateParams.id;

    // control language
    ctrl.lang;

    $scope.$watch(
      function watchLang($scope){
        return(ctrl.lang = MiscServices.getLanguage());
      },
      function(newValue, oldValue){
        // console.log("ctrl.lang: ", newValue);
      }
    );

    ctrl.loaded = false;
    ctrl.baseUri = ENDPOINT_URI;
    ctrl.videos = [];

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
          $rootScope.title = ctrl.artist.nombreCompleto;
          ctrl.loaded = true;
          if(ctrl.artist.linkVideo1 !== '') {
            getVideos(ctrl.artist);
          }
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

    // get artist videos if it has any
    var getVideos = function(artist) {
      if(artist.linkVideo1 != ''){
        ctrl.videos.push($sce.trustAsResourceUrl(artist.linkVideo1));
      } 
      if (artist.linkVideo2 != '') {
        ctrl.videos.push($sce.trustAsResourceUrl(artist.linkVideo2));
      }
    };

  }

})();
