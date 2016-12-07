// app/routes/contato.js
module.exports = function(app){
	var controller = app.controllers.contato;
	app.route('/contato/')
		.get(controller.index);
	app.route('/contatos/')
		.get(controller.listar)
		.post(controller.salvar);
	app.route('/contatos/:id')
		.get(controller.obter)
		.post(controller.salvar)
		.delete(controller.remover);
}