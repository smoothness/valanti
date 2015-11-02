(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainFooter', mainFooter);

  function mainFooter() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/mainFooter/mainFooter.html',
      controller: MainFooterController,
      controllerAs: 'mfooter',
      bindToController: true
    };

    return directive;

    MainFooterController.$inject = ['$scope', 'MiscServices'];

    function MainFooterController($scope, MiscServices) {

      var mfooter = this;

      // control language
      mfooter.lang;

      $scope.$watch(
        function watchLang($scope){
          return(mfooter.lang = MiscServices.getLanguage());
        },
        function(newValue, oldValue){
          // console.log("ctrl.lang: ", newValue);
        }
      );

    }
  }

})();
