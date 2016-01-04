(function(){
    'use strict'

    function MovieDetailsSimilarService($http,$log){
        var service = {};
        service.movie = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';


        service.getMovie = function (movieID) {
            return $http.get('http://api.themoviedb.org/3/movie/' + movieID + '/similar',{
                params:{
                    api_key: key
                }
            })
            .success(function(data) {
                $log.info('Get all the Similar movies', data);
                service.movie = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };


        service.getOneMovie = function(movieID){
            return $http.get('http://api.themoviedb.org/3/movie/' + movieID,{
                params: {
                    api_key: key
                }
            })
            .then(function(movieData) {
                return movieData.data;
            })
            .catch(function(e){
                console.log(e);
            });
        };

        return service;
    }

angular.module('services.movie_details_similar', [])
    .factory('MovieDetailsSimilarService', MovieDetailsSimilarService);
})();

