(function() {
  'use strict';

  angular
    .module('valanti')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    
  }

})();
