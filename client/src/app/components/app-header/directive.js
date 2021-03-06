(function() {
    'use strict';

    function appHeaderComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/app-header/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log) {
                console.log('directive');
                var vm=this;
            },

            link: function(scope, elm, attrs){

            }
        };
    }

angular.module('appHeaderComponent', [])
    .directive('appHeader', appHeaderComponent);

})();