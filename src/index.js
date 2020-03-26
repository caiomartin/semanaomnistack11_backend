const express = require('express');
const routes = require('./routes');

const app = express();


app.use(express.json())

app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar um informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 */

 /**
  * Tipos de Parâmetros
  * 
  * Query Parms: Parâmetros nomeados na rota apos "?" (Filtros, Paginação)
  * Route Parms: Parâmetros utilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizad para criar ou 
  * 
  */

  /**
   *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   *  NoSQL: MongoDB, CouchDB, etc
   */

  /**
   * Driver: SELECT * from users
   * Query builder: table('users').select('*').where() 
   */




app.listen(3333);