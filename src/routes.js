const express = require('express');

const routes = express.routes;

routes.post('/users/', (request, response) =>{
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana OmmiStack 11.0',
        aluno: 'Diego Fernandes'
    })
})

module.exports = routes;