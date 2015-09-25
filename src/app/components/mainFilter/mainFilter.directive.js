(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainFilter', mainFilter);

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

    MainFilterController.$inject = [];

    function MainFilterController() {

      var mfilter = this;

    }
  }

})();
