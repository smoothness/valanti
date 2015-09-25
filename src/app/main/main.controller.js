(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($modal, HomeTilesModel, ENDPOINT_URI) {
    var ctrl = this;

    ctrl.loaded = false;  
    ctrl.baseUri = ENDPOINT_URI;

    // function to call service to get all home tile pieces
    ctrl.getHomeTiles = function() {
      HomeTilesModel.getHomeTiles()
      .then(function(result) {
        ctrl.homeTiles = (result !== 'null') ? result : {};
        ctrl.loaded = true;  
      });  
    };

    ctrl.getHomeTiles();

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