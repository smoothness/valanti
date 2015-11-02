(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainHeader', mainHeader);

  function mainHeader() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/mainHeader/mainHeader.html',
      controller: MainHeaderController,
      controllerAs: 'mheader',
      bindToController: true
    };

    return directive;

    MainHeaderController.$inject = ['MiscServices', '$scope'];

    function MainHeaderController(MiscServices, $scope) {

      var mheader = this;

      mheader.lang;
      mheader.switchLang = MiscServices.switchLanguage;

      $scope.$watch(
        function watchLang($scope){
          return(mheader.lang = MiscServices.getLanguage());
        },
        function(newValue, oldValue){
          // console.log("mheader.lang: ", newValue);
        }
      );


    }
  }

})();
