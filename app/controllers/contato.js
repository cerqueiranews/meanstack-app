// app/controllers/contato.js
var ID_CONTATO_INC = 3;

module.exports = function(app){
	var contato = app.models.contato;
	var controller = {};
	
	controller.index = function(req, res){
		res.render('index', {nome: 'Localhost'});
	};
	
	controller.listar = function(req, res){
		contato.find().exec()
		.then(function(contatos){res.json(contatos);},erro500);
	};
	
	controller.obter = function(req, res){
		var id = req.params.id;
		contato.findById(id).exec()
		.then(function(contato){
			if(!contato){
				erro404('Contato não encontrado');
			}else{
				res.json(contato);
			}
		},erro500);
	};
	
	controller.salvar = function(req, res){
		var contato = req.body;
		contato = contato._id ?
				atualizar(contato):
				adicionar(contato);
				
		res.json(contato);
	};
	
	function atualizar(contatoForm){
		contato.findByIdAndUpdate(contatoForm._id, contatoForm).exec()
		.then(function(contato){
			if(!contato){
				erro404('Contato não encontrado');
			}else{
				return contato;
			}
		},erro500);
	}
	
	function adicionar(contatoForm){
		contato.create(contatoForm)
		.then(function(contato){return contato;},erro500);
	}
	
	controller.remover = function(req, res){
		var id = req.params.id;
		contato.remove({"_id": id}).exec()
		.then(function(){res.status(204).end();},erro500);
	};
	
	function erro500(erro){
		console.error(erro);
		res.status(500).json(erro);
	}
	
	function erro404(erro){
		console.error(erro);
		res.status(404).json(erro);
	}
	
	return controller;
}