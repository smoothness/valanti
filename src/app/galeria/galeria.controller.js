(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('GaleriaController', GaleriaController);

	GaleriaController.$inject = ['$scope', 'MiscServices'];

	function GaleriaController($scope, MiscServices) {
		
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