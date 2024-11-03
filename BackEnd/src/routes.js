const express = require('express');
const routes = express.Router();

const AnnotationsController = require('./controllers/AnnotationsController');
const PriorityController = require('./controllers/PriorityController');

//rotas anotaçoes
routes.post('/annotations',AnnotationsController.creat);
routes.get('/annotations',AnnotationsController.read);
routes.delete('/annotations/:id',AnnotationsController.delete);

// rota de prioridade
routes.get('/priorities',PriorityController.read)
routes.post('/priorities/:id',PriorityController.update);

module.exports = routes;

