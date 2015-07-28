(function() {
  'use strict';

  angular.module('valanti')
  .factory('MainTiles', function MainTilesFactory($http) {
    return {
      tiles: function() {
        return $http({
          method: 'GET',
          url: 'http://www.galeriavalanti.com/Admin/backend/obra.php/gethome'
        });
      },
      tilesByArtist: function(id) {
        return $http({
          method: 'GET',
          url: 'http://www.galeriavalanti.com/Admin/backend/obra.php/gethome?idArtista=' + id
        });
      }
    }
  })
  .factory('MainSlider', function MainSliderFactory($http) {
    return {
      slides: function() {
        return $http({
          method: 'GET',
          url: 'http://www.galeriavalanti.com/Admin/backend/obra.php/getfeatured'
        });
      }
    }
  })
  .factory('AllArtists', function AllArtistsFactory($http) {
    return {
      getAllArtists: function() {
        return $http({
          method: 'GET',
          url: 'http://www.galeriavalanti.com/Admin/backend/artista.php/get'
        });
      }
    }
  })
  .service('currArtist', function CurrentArtistService(){
    var currArtist = this;
    currArtist.artist;

    return {
      setCurrArtist: function(artist) {
        currArtist.artist = artist;
      },
      getCurrArtist: function() {
        return currArtist.artist;
      }
    }
  });

})();