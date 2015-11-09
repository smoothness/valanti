(function() {
	'use strict';

	angular
	  .module('valanti')
	  .service('MiscServices', MiscServices);

	MiscServices.$inject = ['$rootScope'];

	function MiscServices($rootScope) {
		
		var service = this;

		service.switchLanguage = function() {
			$rootScope.lang == 'en' ? $rootScope.lang = 'sp' : $rootScope.lang = 'en';
		}

		service.getLanguage = function () {
			return $rootScope.lang;
		}

	}
})();