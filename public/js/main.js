// public/js/main.js
angular.module('meanstack', ['ngRoute', 'ngResource']).config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatoController'
	});
});