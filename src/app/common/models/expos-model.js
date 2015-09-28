(function() {
	'use strict';

	angular
	  .module('valanti')
	  .service('ExposModel', ExposModel);

	ExposModel.$inject = ['$http', 'ENDPOINT_URI'];

	function ExposModel($http, ENDPOINT_URI) {

		var service = this;

		function extract(result) {
			return result.data;
		}

		// returns all artists
		function getUrl() {
			return ENDPOINT_URI + 'Admin/backend/exposicion.php/get';
		}

		service.all = function() {
			return $http.get(getUrl()).then(extract);
		};
		
	}
})();