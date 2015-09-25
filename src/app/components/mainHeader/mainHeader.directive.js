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

    MainHeaderController.$inject = [];

    function MainHeaderController() {

      var mheader = this;

    }
  }

})();
