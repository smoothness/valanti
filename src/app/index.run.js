(function() {
  'use strict';

  angular
    .module('valanti')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

    $rootScope.baseURL = 'http://beta.galeriavalanti.com/';

  }

})();
