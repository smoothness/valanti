(function(){
	'use strict';

	angular
		.module('valanti')
		.service('PiecesModel', PiecesModel);

	// PiecesModel.$inject = ['$http, ENDPOINT_URI'];

	function PiecesModel($http, ENDPOINT_URI) {

		var service = this;

		function extract(result) {
			return result.data;
		}

		// returns all piecess
		function getUrl() {
			return ENDPOINT_URI + 'Admin/backend/obra.php/get';
		}

		// returns a piece by id
		function getUrlForId(obraId) {
			return ENDPOINT_URI + 'Admin/backend/obra.php/get' + '?idObra=' + obraId;
		}

		service.all = function() {
			return $http.get(getUrl()).then(extract);
		};

    service.fetch = function (obraId) {
      return $http.get(getUrlForId(artistId)).then(extract);
    };

	}

})();