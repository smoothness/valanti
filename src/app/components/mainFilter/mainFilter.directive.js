(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainFilter', mainFilter);

  /** @ngInject */
  function mainFilter() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/mainFilter/mainFilter.html',
      controller: MainFilterController,
      controllerAs: 'mfilter',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainFilterController() {
      var mfilter = this;
    }
  }

})();
