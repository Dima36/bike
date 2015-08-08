angular.module('APP').config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "client/views/home.ng.html"
        })
        .state('routes', {
            url: "/routes",
            templateUrl: "client/views/routes.ng.html",
        })
        .state('infrastruktura', {
            url: "/infrastruktura",
            templateUrl: "client/views/infrastruktura.ng.html",
        })
        .state('events', {
            url: "/events",
            templateUrl: "client/views/events.ng.html",
        })
        .state('bike-rent', {
            url: "/bike-rent",
            templateUrl: "client/views/bike-rent.ng.html",
        });

    $locationProvider.html5Mode(true).hashPrefix('!');
}]);
