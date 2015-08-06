(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MainTiles, $modal, $scope) {
    var mc = this;
    mc.tiles = [];
    mc.loaded = false;

    // main tiles service call
    MainTiles.tiles().success(function(data) {
      mc.tiles = data;
      mc.loaded = true;
    });


    //modal controller shit
    mc.animationsEnabled = true;
    mc.open = function (size) {
      var modalInstance = $modal.open({
        animation: mc.animationsEnabled,
        templateUrl: 'app/components/modal/modalInstance.html',
        controller: 'ModalInstanceController',
        size: size,
        resolve: {}
      });
      // console.log(modalInstance);
    };

    // modalInstance.result.then(function (selectedItem) {
    //   $scope.selected = selectedItem;
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });

    // $scope.toggleAnimation = function () {
    //   $scope.animationsEnabled = !$scope.animationsEnabled;
    // };


  }    

})();