(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainHeader', mainHeader);

  /** @ngInject */
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
    function MainHeaderController(moment) {
      var mheader = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
