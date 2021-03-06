(function() {
    'use strict';

    function popularTvShows() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/tv-shows/templates/popular-tv-shows.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, tvShowsService) {
                var vm = this;
                vm.filters = [
                    { filter: '-vote_average', name: 'Trier par note croissante' },
                    { filter: '+vote_average', name: 'Trier par note décroissante' },
                    { filter: '-first_air_date', name: 'Date de sortie récente' }
                ];          
                vm.filterSelected = '-vote_average';
                tvShowsService.getPopularTvShows()
                    .then(function(popularTvShows) {
                        vm.popularTvShows = popularTvShows;
                    })
                    .catch(function(e){
                        $log.error(e);
                    });
            }
        };
    }

angular.module('popularTvShowsDirective', ['services.tvShows', 'starRatingDirective'])
    .directive('popularTvShowsDirective', popularTvShows);

})();