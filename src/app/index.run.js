(function() {
  'use strict';

  angular
    .module('valanti')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $location) {

    // $log.debug('runBlock end');
    
    $rootScope.lang = 'sp';

    $rootScope.go = function (path) {
			// if (!globalStateService.isAdjustTileState()) {
				$location.url(path);
			// }
		};

  }

})();
