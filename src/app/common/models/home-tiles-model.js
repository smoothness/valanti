(function(){
  'use strict';

  angular
    .module('valanti')
    .service('HomeTilesModel', HomeTilesModel);

  // HomeTilesModel.$inject = ['$http, ENDPOINT_URI'];

  function HomeTilesModel($http, ENDPOINT_URI) {

    var service = this;

    function extract(result) {
      return result.data;
    }

    function getUrl() {
      return ENDPOINT_URI + 'Admin/backend/obra.php/gethome';
    }

    service.getHomeTiles = function() {
      return $http.get(getUrl()).then(extract);
    };

  }

})();