// public/js/controllers/ContatoController
angular.module('meanstack').controller('ContatoController', function($resource, $scope, contatosService){
	$scope.nome = "Contatos";
	$scope.contatos = [];
	$scope.filtro = '';
	$scope.acao = '';
	$scope.showForm = 0;
	
	function log(erro){
		console.error(erro);
	}
	
	function listar(){
		contatosService.query(
				function(contatos){
					$scope.contatos = contatos;
				}, 
				log);
	}
	
	listar();
	
	$scope.remover = function(contato){
		contatosService.delete({id: contato._id},listar,log);
	}
	
	$scope.atualizar = function(contato){
		contatosService.get({id: contato._id},
				function(contatoForm){
					$scope.showForm = 1;
					$scope.acao = 'Atualizar';
					$scope.contatoForm = contatoForm;
				},
				log);
	}
	
	$scope.incluir = function(){
		$scope.showForm = 1;
		$scope.acao = 'Incluir';
		$scope.contatoForm = new contatosService();
	}
	
	$scope.salvar = function(){
		$scope.contatoForm.$save()
		.then(function(){
			$scope.showForm = 0;
			$scope.push = {on: 1, tp: 'success', msg: 'Contato salvo com sucesso'};
			$scope.contatoForm = new contatosService();
		})
		.then(listar)
		.catch(log);
	}
	
	$scope.cancelar = function(){
		$scope.showForm = 0;
	}
	
});