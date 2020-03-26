const express = require('express');

const app = express();


app.use(express.json())

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


app.post('/users/', (request, response) =>{
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana OmmiStack 11.0',
        aluno: 'Diego Fernandes'
    })
})

app.listen(3333);