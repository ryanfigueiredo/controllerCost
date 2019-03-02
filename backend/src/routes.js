const express = require('express');
const departamentoController = require('./controllers/departamentoController');
const funcionarioController = require('./controllers/funcionarioController');
const movimentacaoController = require('./controllers/movimentacaoController');


const route = express.Router();

route.post('/departamento', departamentoController.create);
route.get('/departamento', departamentoController.readAll);
route.put('/departamento/:id', departamentoController.update);
route.delete('/departamento/:id', departamentoController.delete);
route.get('/departamento/searchByName/:nomeDepartamento', departamentoController.searchByName);


route.post('/funcionario', funcionarioController.create);
route.get('/funcionario', funcionarioController.readAll);
route.put('/funcionario/:id', funcionarioController.update);
route.delete('/funcionario/:id', funcionarioController.delete);
route.get('/funcionario/searchByName/:nomeFuncionario', funcionarioController.searchByName);



route.post('/movimentacao', movimentacaoController.create);
route.get('/movimentacao', movimentacaoController.readAll);
route.put('/movimentacao/:id', movimentacaoController.update);
route.delete('/movimentacao/:id', movimentacaoController.delete);
route.get('/movimentacao/:id', movimentacaoController.readById);
route.get('/movimentacao/searchByDescription/:descricao', movimentacaoController.searchByDescription);
route.get('/movimentacao/searchByFuncionarioID/:FuncionarioID', movimentacaoController.searchByFuncionarioID);



module.exports = route




