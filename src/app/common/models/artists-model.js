(function(){
	'use strict';

	angular
		.module('valanti')
		.service('ArtistsModel', ArtistsModel);

	// ArtistsModel.$inject = ['$http, ENDPOINT_URI'];

	function ArtistsModel($http, ENDPOINT_URI) {

		var service = this;

		function extract(result) {
			return result.data;
		}

		function getUrl() {
			return ENDPOINT_URI + 'Admin/backend/artista.php/get';
		}

		function getUrlForId(artistId) {
			return ENDPOINT_URI + 'Admin/backend/artista.php/get' + '?idArtista=' + artistId;
		}

		service.all = function() {
			return $http.get(getUrl()).then(extract);
		};

    service.fetch = function (artistId) {
      return $http.get(getUrlForId(artistId)).then(extract);
    };

	}

})();