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

    TileController.$inject = ['ENDPOINT_URI'];

    function TileController(ENDPOINT_URI) {

      var tc = this;

      tc.baseUri = ENDPOINT_URI;

    }

  }

})();