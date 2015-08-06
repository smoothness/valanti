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
    mc.modalShown = false;

    // main tiles service call
    MainTiles.tiles().success(function(data) {
      mc.tiles = data;
      mc.loaded = true;
    });

    
    // modal controls
    mc.toggleModal = function() {
      console.log('toggle modal!');
      mc.modalShown = !mc.modalShown;
    };


  }

})();
