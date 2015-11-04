(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('ExposController', ExposController);

	ExposController.$inject = ['ExposModel', 'ENDPOINT_URI', '$scope', 'MiscServices', '$rootScope'];

	function ExposController(ExposModel, ENDPOINT_URI, $scope, MiscServices, $rootScope) {

    $rootScope.title = 'Galería Valanti - Exposiciones';
		
		var ctrl = this;

    // control language
    ctrl.lang;

    $scope.$watch(
      function watchLang($scope){
        return(ctrl.lang = MiscServices.getLanguage());
      },
      function(newValue, oldValue){
        // console.log("ctrl.lang: ", newValue);
      }
    );

    ctrl.loaded = false;  
    ctrl.baseUri = ENDPOINT_URI;

    // function to call service to get all expos
    ctrl.getAllExpos = function() {
      ExposModel.all()
      .then(function(result) {
        ctrl.expos = (result !== 'null') ? result : {};
        ctrl.loaded = true;  
      });  
    };

    ctrl.getAllExpos();

	}
})();