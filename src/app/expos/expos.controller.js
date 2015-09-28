(function() {
	'use strict';

	angular
	  .module('valanti')
	  .controller('ExposController', ExposController);

	ExposController.$inject = ['ExposModel', 'ENDPOINT_URI'];

	function ExposController(ExposModel, ENDPOINT_URI) {
		
		var ctrl = this;

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