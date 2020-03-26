const express = require('express');
const OngController = require('./constroller/OngController');
const IncidentsController = require('./constroller/IncidentsController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;