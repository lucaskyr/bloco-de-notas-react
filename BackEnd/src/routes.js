const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController')

routes.post('/annotations', AnnotationController.creat);
routes.get('/annotations',AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

routes.get('/priorities',PriorityController.read);
routes.post('/priorities/:id',PriorityController.update);
module.exports = routes;