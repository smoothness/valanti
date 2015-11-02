(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistsController', ArtistsController);

  ArtistsController.$inject = ['ArtistsModel', 'ENDPOINT_URI', '$scope', 'MiscServices'];

  function ArtistsController(ArtistsModel, ENDPOINT_URI, $scope, MiscServices) {

    var ctrl = this;

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

    ctrl.getArtists = function() {
      ArtistsModel.all()
        .then(function(result) {
          ctrl.artists = (result !== 'null') ? result : {};
          ctrl.loaded = true;
        });
    };

    ctrl.getArtists();

    /**
     * Get the names of all the artists and make an array of names
     * to populate the select options for the filters 
     * @return {[array]} array of strings
     */
    ctrl.getAllArtistNames = function() {
      ArtistsModel.all()
      .then(function(result) {
        var justNames = result.map(function(obj){ 
           return obj.nombreCompleto;
        });
        ctrl.allArtistNames = justNames;
      });
    };

    ctrl.getAllArtistNames();

  }

})();