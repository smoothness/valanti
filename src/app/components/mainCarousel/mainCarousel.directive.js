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

      // mcarousel.addSlide = function() {
      //   var newWidth = 600 + slides.length + 1;
      //   slides.push({
      //     image: 'http://placekitten.com/' + newWidth + '/300',
      //     text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
      //       ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      //   });
      // };

      // for (var i=0; i<4; i++) {
      //   mcarousel.addSlide();
      // }
    }
  }

})();