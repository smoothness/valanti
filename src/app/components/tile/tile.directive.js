(function() {
  'use strict';

  angular
    .module('valanti')
    .directive('tile', tile);

  /** @ngInject */
  function tile() {
    var directive = {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/tile/tile.html',
      scope: {
        'pieceData': '=',
        'openModal': '&'
      },
      controller: TileController,
      controllerAs: 'tile',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TileController($rootScope, currPiece, currArtist, AllArtists, lodash) {
      var t = this;
      t.baseURL = $rootScope.baseURL;
      t.currPiece = currPiece;
      t.currArtist = currArtist;
      t.allArtists;

      AllArtists.getAllArtists().success(function(data) {
        t.allArtists = data;
      });

      t.setArtistById = function(id) {
        var artist = lodash.find(t.allArtists, function(obj) {
          return obj.idArtista == id;
        });
        t.currArtist.setCurrArtist(artist);
      };

    }

  }

})();
