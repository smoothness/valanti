(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  MainController.$inject = ['$modal', 'HomeTilesModel', 'SlidesModel', 'ArtistsModel', 'PiecesModel', 'ENDPOINT_URI', 'MiscServices', '$scope', '$rootScope'];

  function MainController($modal, HomeTilesModel, SlidesModel, ArtistsModel, PiecesModel, ENDPOINT_URI, MiscServices, $scope, $rootScope) {
    
    $rootScope.title = 'Galería Valanti';
    
    var ctrl = this;

    ctrl.loaded = false;  
    ctrl.baseUri = ENDPOINT_URI;
    ctrl.usedFilter = false;
    ctrl.myInterval = 10000;
    ctrl.homeTiles = [];

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

    /**
     * Update Model
     * This function updates the model from the main tiles
     * when the filter selects have been changed
     */
    ctrl.updateModel = function() {
      ctrl.homeTiles = ctrl.allPieces;
    };

    /**
     * Calls all slides service for main home carousel
     * @return slides array of objects
     */
    ctrl.allSlides = function() {
      SlidesModel.getSlides()
      .then(function (result) {
        ctrl.slides = (result !== 'null') ? result : {};
      });  
    };

    ctrl.allSlides();

    /**
     * getAllPieces, total piece items from services
     * @return {[array of objects]} 
     */
    ctrl.getAllPieces = function() {
      PiecesModel.all()
      .then(function(result){
        ctrl.allPieces = (result !== 'null') ? result : {};
      });
    };

    ctrl.getAllPieces();

    /**
     * getHomeTiles gets all the featured pieces for the initial
     * tile setup
     * @return {Array of objects}
     */
    ctrl.getHomeTiles = function() {
      HomeTilesModel.getHomeTiles()
      .then(function(result) {
        ctrl.homeTiles = (result !== 'null') ? result : {};
        ctrl.loaded = true;  
      });  
    };

    ctrl.getHomeTiles();

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

    /**
     * Get the names of all the artists and make an array of names
     * to populate the select options for the filters 
     * @return {[array]} array of strings
     */
    ctrl.getAllPieceTypes = function() {
      PiecesModel.all()
      .then(function(result) {
        var allTypes = [];
        result.forEach(function(obj, i, array){
          var type = obj.tipo;
          if(allTypes.indexOf(type) == -1){
            allTypes.push(type);
          }
        });
        ctrl.allPieceTypes = allTypes;
      });
    };

    ctrl.getAllPieceTypes();

    /**
     * Get all the types of techniques make an array
     * to populate the select options for the filters 
     * @return {[array]} array of strings
     */
    ctrl.getAllPieceTechniques = function() {
      PiecesModel.all()
      .then(function(result) {
        var allTechs = [];
        result.forEach(function(obj, i, array){
          var tech = obj.tecnica;
          if(allTechs.indexOf(tech) == -1){
            allTechs.push(tech);
          }
        });
        ctrl.allTechniques = allTechs;
      });
    };

    ctrl.getAllPieceTechniques();


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
        // controllerAs: 'mod',
        // bindToController: true,
      });

      // modalInstance.result.then(function (selectedItem) {
      //   $scope.selected = selectedItem;
      // }, function () {
      //   $log.info('Modal dismissed at: ' + new Date());
      // });
    };

  }    

})();