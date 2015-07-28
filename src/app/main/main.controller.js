(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainTiles) {
    var mc = this;

    MainTiles.tiles().success(function(data) {
      mc.tiles = data;
    });

  }

})();
