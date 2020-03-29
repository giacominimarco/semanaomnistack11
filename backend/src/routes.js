const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); // Lista as ongs criadas
routes.post('/ongs', OngController.create); // Cria ongs

routes.get('/profile', ProfileController.index); // Lista os incidents expecificos de uma ong

routes.post('/incidents', IncidentController.create); // Cria os incidents
routes.get('/incidents', IncidentController.index); // Cria os incidents

routes.delete('/incidents/:id', IncidentController.delite); // Deleta os incidents

module.exports = routes;