//TODO: var Module = angular.module("recipesApp", ["ngRoute", "ngResource", "STAngular", "$strap", "localytics.directives"]);

var Module = angular.module("RecipesApp", ["ngRoute", "ngResource"])
.config([
        "$routeProvider",
        "$locationProvider",
        "$httpProvider",
        function ($routeProvider, $locationProvider, $httpProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider.when("/", { templateUrl: "recipes-list.html", controller: "RecipesListCtrl", controllerAs: 'vm', caseInsensitiveMatch: true });

            $routeProvider.otherwise({ redirectTo: "/"});
        }
    ]);