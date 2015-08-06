(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainTiles) {
    var mc = this;
    mc.tiles = [];
    mc.loaded = false;  
 
    // main tiles service call
    MainTiles.tiles().success(function(data) {
      mc.tiles = data;
      mc.loaded = true;
    });




  }

})();
