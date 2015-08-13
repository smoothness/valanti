(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainCarousel', mainCarousel);

  /** @ngInject */
  function mainCarousel() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/mainCarousel/mainCarousel.html',
      controller: MainCarouselController,
      controllerAs: 'mcarousel',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainCarouselController($scope, $rootScope, MainSlider) {

      var mcarousel = this;
      mcarousel.myInterval = 5000;
      mcarousel.slides = [];
      mcarousel.baseURL = $rootScope.baseURL;

      MainSlider.slides().success(function(data) {
        mcarousel.slides = data;
      });

    }
  }

})();