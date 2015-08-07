(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('tile', tile);

  /** @ngInject */
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
    function TileController($rootScope, currPiece) {
      var t = this;
      t.baseURL = $rootScope.baseURL;
      t.currPiece = currPiece;
    }
  }

})();
