// public/js/services/ContatoService.js
angular.module('meanstack').factory('contatosService', function($resource){
	return $resource('/contatos/:id');
});