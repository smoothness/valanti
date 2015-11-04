(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('ContactoController', ContactoController);

	ContactoController.$inject = ['$scope', 'MiscServices', '$rootScope'];

	function ContactoController($scope, MiscServices, $rootScope) {
		
    $rootScope.title = 'Galería Valanti - Contáctenos';

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