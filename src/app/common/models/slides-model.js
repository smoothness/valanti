(function() {
  'use strict';

  angular
    .module('valanti')
    .service('SlidesModel', SlidesModel);

  // NameService.$inject = ['dependencies'];

  function SlidesModel($http, ENDPOINT_URI) {

    var service = this;

    function extract(result) {
      return result.data;
    }

    function getUrl() {
      return ENDPOINT_URI + 'Admin/backend/obra.php/getfeatured';
    }

    service.getSlides = function() {
      return $http.get(getUrl()).then(extract);
    };

  }
})();