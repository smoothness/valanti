(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('modalDialog', modalDialog);

  /** @ngInject */
  function modalDialog() {
    var directive = {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/modalDialog/modalDialog.html',
      controller: ModalDialogController,
      scope: {
        show: '=show'
      },
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width) {
          scope.dialogStyle.width = attrs.width;
        }
        if (attrs.height) {
          scope.dialogStyle.height = attrs.height;
        }
        scope.hideModal = function() {
          scope.show = false;
        };
      }
    };

    return directive;

    /** @ngInject */
    function ModalDialogController($scope) {
      // var modal = this;


    }
  }

})();