const express = require('express');
const routes = express.Router();

const annotations = require('./controllers/AnnotationsController')

routes.post('/annotations', annotationController.creat);
routes.get('/annotations',annotationController.read);
routes.delete('/annotations/:id', annotationController.delete);

module.exports = routes;

