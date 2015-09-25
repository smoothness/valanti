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
      controllerAs: 'tc',
      bindToController: true
    };

    return directive;

    function TileController(ENDPOINT_URI) {

      var ctrl = this;

      ctrl.baseUri = ENDPOINT_URI;

    }

  }

})();