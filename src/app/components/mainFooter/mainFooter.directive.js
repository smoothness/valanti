(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainFooter', mainFooter);

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

    function MainFooterController() {

      var mfooter = this;

    }
  }

})();
