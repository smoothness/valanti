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
      .state('artists', {
        url: '/artists',
        templateUrl: 'app/artists/artists.html',
        controller: 'ArtistsController',
        controllerAs: 'ac'
      })
      .state('artist-details', {
        url: '/artists/:id',
        templateUrl: 'app/artists/detail/artist.detail.html',
        controller: 'ArtistDetailController',
        controllerAs: 'adc'
      })
      .state('galeria', {
        url: '/galeria',
        templateUrl: 'app/galeria/galeria.html',
        controller: 'GaleriaController',
        controllerAs: 'gc'
      })
      .state('servicios', {
        url: '/servicios',
        templateUrl: 'app/servicios/servicios.html',
        controller: 'ServiciosController',
        controllerAs: 'sc'
      })
      .state('expos', {
        url: '/expos',
        templateUrl: 'app/expos/expos.html',
        controller: 'ExposController',
        controllerAs: 'ec'
      })
      .state('cursos', {
        url: '/cursos',
        templateUrl: 'app/cursos/cursos.html',
        controller: 'CursosController',
        controllerAs: 'cc'
      })
      .state('contacto', {
        url: '/contacto',
        templateUrl: 'app/contacto/contacto.html',
        controller: 'ContactoController',
        controllerAs: 'ccc'
      });

    // for any unmatched url
    $urlRouterProvider.otherwise('/');

    // remove hash from url's
    $locationProvider.html5Mode(true);
    
  }

})();
