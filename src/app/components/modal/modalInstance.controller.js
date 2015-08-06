(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ModalInstanceController', ModalInstanceController);

  /** @ngInject */
  function ModalInstanceController($scope, $modalInstance) {
    var mod = this;

    console.log(this);
    console.log($modalInstance);

    $scope.ok = function () {
      $modalInstance.close('ok');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
    
  }

})(); // closes all