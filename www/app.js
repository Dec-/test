var app = angular.module('tvz', ['ionic', 'ngCordova'])

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Do nothing
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html'
        })

        .state('app.o-nama', {
            url: '/o-nama',
            views: {
                'menuContent': {
                    templateUrl: 'templates/o-nama.html'
                }
            }
        })

        .state('app.rjesenja', {
            url: '/rjesenja',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rjesenja.html',
                    controller: 'RjesenjaCtrl'
                }
            }
        })

        .state('app.kontakt', {
            url: '/kontakt',
            views: {
                'menuContent': {
                    templateUrl: 'templates/kontakt.html'
                }
            }
        })

        .state('app.detalji', {
            url: '/rjesenja/detalji/:item',
            views: {
                'menuContent': {
                    templateUrl: 'templates/rjesenja-detalji.html',
                    controller: 'RjesenjaDetaljiCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/app/rjesenja');
});