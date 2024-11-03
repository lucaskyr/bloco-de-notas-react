const express = require('express');
const routes = express.Router();

const annotationController = require('./controllers/annotationController');

routes.post('/annotations', annotationController.creat);
routes.get('/annotations',annotationController.read);
routes.delete('/annotations/:id', annotationController.delete);
module.exports = routes;