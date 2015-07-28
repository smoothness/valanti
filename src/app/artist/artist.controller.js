(function() {
  'use strict';

  angular
    .module('valanti')
    .controller('ArtistController', ArtistController);

  /** @ngInject */
  function ArtistController(AllArtists, currArtist, $rootScope) {
    var ac = this;
    ac.baseURL = $rootScope.baseURL;
    ac.currArtist = currArtist;

    AllArtists.getAllArtists().success(function(data) {
      ac.artists = data;
    });
    
  }

})();
