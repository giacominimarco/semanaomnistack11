const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); // Conesão de desenvolvimento

module.exports = connection;