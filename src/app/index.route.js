(function() {
  'use strict';

  angular
    .module('valanti')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('artist', {
        url: '/artist',
        templateUrl: 'app/artist/artist.html',
        controller: 'ArtistController',
        controllerAs: 'ac'
      })
      .state('artist-details', {
        url: '/artist/:id',
        templateUrl: 'app/artist/detail/artist.detail.html',
        controller: 'ArtistDetailController',
        controllerAs: 'adc'
      });

    // for any unmatched url
    $urlRouterProvider.otherwise('/');

    // remove hash from url's
    $locationProvider.html5Mode(true);
    
  }

})();
