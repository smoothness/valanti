(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainFooter', mainFooter);

  /** @ngInject */
  function mainFooter() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/mainFooter/mainFooter.html',
      controller: MainFooterController,
      controllerAs: 'mfooter',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainFooterController() {
      var mfooter = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
