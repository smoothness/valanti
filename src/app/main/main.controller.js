(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($modal, HomeTilesModel, ENDPOINT_URI) {
    var ctrl = this;
    // ctrl.tiles = [];
    ctrl.loaded = false;  
    ctrl.baseUri = ENDPOINT_URI;

    // main tiles service call
    ctrl.getHomeTiles = function() {
      HomeTilesModel.getHomeTiles()
      .then(function (result) {
        ctrl.homeTiles = (result !== 'null') ? result : {};
      });  
    };

    ctrl.getHomeTiles();

    
    // Modal instantiation
    ctrl.animationsEnabled = true;
    ctrl.open = function () {
      var modalInstance = $modal.open({
        animation: ctrl.animationsEnabled,
        templateUrl: 'app/components/modal/modal.html',
        controller: 'ModalController',
        // controllerAs: 'mod',
        // bindToController: true,
        size: 'lg',
        resolve: {}
      });

      // modalInstance.result.then(function (selectedItem) {
      //   $scope.selected = selectedItem;
      // }, function () {
      //   $log.info('Modal dismissed at: ' + new Date());
      // });
    };

  }    

})();