(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ModalController', ModalController);

  ModalController.$inject = ['$scope', '$modalInstance', 'item', 'ENDPOINT_URI'];

  function ModalController($scope, $modalInstance, item, ENDPOINT_URI) {

    $scope.item = item.currPiece;
    $scope.baseUri = ENDPOINT_URI;

    $scope.ok = function () {
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }    

})();
