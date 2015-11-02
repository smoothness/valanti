(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('ServiciosController', ServiciosController);

	ServiciosController.$inject = ['MiscServices', '$scope'];

	function ServiciosController(MiscServices, $scope) {
		
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
	}
})();