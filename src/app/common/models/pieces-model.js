(function(){
	'use strict';

	angular
		.module('valanti')
		.service('PiecesModel', PiecesModel);

	PiecesModel.$inject = ['$http', 'ENDPOINT_URI'];

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
		function getUrlForPieceId(obraId) {
			return ENDPOINT_URI + 'Admin/backend/obra.php/get' + '?idObra=' + obraId;
		}

		// returns a piece by artist id
		function getUrlForArtistId(artistaId) {
			return ENDPOINT_URI + 'Admin/backend/obra.php/get' + '?idArtista=' + artistaId;
		}

		service.all = function() {
			return $http.get(getUrl()).then(extract);
		};

    service.fetch = function (obraId) {
      return $http.get(getUrlForPieceId(artistId)).then(extract);
    };

    service.fetchByArtist = function (artistaId) {
      return $http.get(getUrlForArtistId(artistaId)).then(extract);
    };

	}

})();