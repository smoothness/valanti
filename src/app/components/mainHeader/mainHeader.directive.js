(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainHeader', mainHeader);

  function mainHeader() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/mainHeader/mainHeader.html',
      controller: MainHeaderController,
      controllerAs: 'mheader',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainHeaderController() {

      var mheader = this;

    }
  }

})();
