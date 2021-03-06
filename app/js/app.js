'use strict';

/* App Module */

var xeniaApp = angular.module('xeniaApp', ['ngRoute', 'xeniaControllers', 'xeniaServices']);

xeniaApp.value('serverUrl', '');
xeniaApp.value('notificationArea', '#process-notification-area');

xeniaApp.config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        //Remove the header used to identify ajax call  that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider.
            when('/events', {
                templateUrl: 'partials/events.html',
                controller: 'EventsListCtrl'
            }).
            when('/event/:id', {
                templateUrl: 'partials/eventDetails.html',
                controller: 'EventDetailsCtrl'
            }).
            when('/prizes', {
                templateUrl: 'partials/prizes.html',
                controller: 'PrizesCtrl'
            }).
            when('/prizes/add', {
                templateUrl: 'partials/prizesAdd.html',
                controller: 'PrizeAddCtrl'
            }).
            otherwise({
                redirectTo: '/events'
            });
    }]);
