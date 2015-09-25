(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('tile', tile);

  function tile() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/tile/tile.html',
      scope: {
        'pieceData': '=',
        'openModal': '&'
      },
      controller: TileController,
      controllerAs: 'tile',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TileController(ENDPOINT_URI, HomeTilesModel) {

    //   var ctrl = this;
    //   ctrl.baseUri = ENDPOINT_URI;
    //   // ctrl.currPiece = currPiece;
    //   // ctrl.currArtist = currArtist;
    //   // ctrl.allArtists;

    //   ctrl.getHomeTiles = function() {
    //     HomeTilesModel.getHomeTiles()
    //     .then(function (result) {
    //       ctrl.homeTiles = (result !== 'null') ? result : {};
    //     });  
    //   };

    //   ctrl.getHomeTiles();

    }

  }

})();