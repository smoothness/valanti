(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ModalController', ModalController);

  /** @ngInject */
  function ModalController($scope, $modalInstance, currPiece) {
    var mod = this;

    console.log(this);
    console.log($modalInstance);

    $scope.piece = currPiece.getCurrPiece();

    // $scope.items = items;
    // $scope.selected = {
    //   item: $scope.items[0]
    // };
    // $scope.piece = x;

    $scope.ok = function () {
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }    

})();
