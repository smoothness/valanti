(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ModalController', ModalController);

  /** @ngInject */
  function ModalController($scope, $modalInstance, currPiece) {
    // var mod = this;
    // console.log(this);
    // console.log($modalInstance);
    $scope.piece = currPiece.getCurrPiece();

    $scope.ok = function () {
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }    

})();
