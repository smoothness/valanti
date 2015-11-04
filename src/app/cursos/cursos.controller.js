(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('CursosController', CursosController);

	CursosController.$inject = ['ENDPOINT_URI', '$scope', 'MiscServices', '$rootScope'];

	function CursosController(ENDPOINT_URI, $scope, MiscServices, $rootScope) {

    $rootScope.title = 'Galería Valanti - Cursos';
		
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