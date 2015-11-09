(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('GaleriaController', GaleriaController);

	GaleriaController.$inject = ['$scope', 'MiscServices', '$rootScope'];

	function GaleriaController($scope, MiscServices, $rootScope) {

    $rootScope.title = 'Acerca de la Galería Valanti';
		
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