(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainTiles) {
    var mc = this;
    mc.loaded = false;

    MainTiles.tiles().success(function(data) {
      mc.tiles = data;
      mc.loaded = true;
    });

  }

})();
