(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('CursosController', CursosController);

	CursosController.$inject = ['ENDPOINT_URI', '$scope', 'MiscServices'];

	function CursosController(ENDPOINT_URI, $scope, MiscServices) {
		
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