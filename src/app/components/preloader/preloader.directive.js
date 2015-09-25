(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('preloader', preloader);

  /** @ngInject */
  function preloader() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/preloader/preloader.html',
      controller: PreloaderController,
      controllerAs: 'preloader',
      bindToController: true
    };

    return directive;

    PreloaderController.$inject = [];

    function PreloaderController() {
      var preloader = this;
    }
  }

})();