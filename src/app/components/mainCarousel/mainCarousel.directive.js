(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('mainCarousel', mainCarousel);

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

    MainCarouselController.$inject = ['SlidesModel', 'ENDPOINT_URI'];

    function MainCarouselController(SlidesModel, ENDPOINT_URI) {

      var ctrl = this;
      
      ctrl.myInterval = 10000;
      ctrl.baseUri = ENDPOINT_URI;

      ctrl.allSlides = function() {
        SlidesModel.getSlides()
        .then(function (result) {
          ctrl.slides = (result !== 'null') ? result : {};
        });  
      };

      ctrl.allSlides();
    }
    
  }

})();