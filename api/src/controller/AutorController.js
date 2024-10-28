

import { CadastrarAutores, ConsultarAutores } from "../repository/AutorRepository.js";
import {  Router } from "express";  

const server = Router();


// Cadastrar Autores

server.post('/autores/cadastrar', async (req, resp) => {
    try {
        const { nome, nascionalidade } = req.body;
        if(!nome) throw new Error("Escreva o nome de um autor!")
        const resposta = await CadastrarAutores(nome, nascionalidade)
        
        resp.send();
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})




// Consultar Autores de Livros

// NAO COLOCAR /nome=exemplo; só usar a letra dps da barra
server.get('/autores/:nome?', async (req, resp) => {
    try {
        const { nome } = req.params
        const resposta = await ConsultarAutores(nome);
        const consultarTodos = await ConsultarAutores("");
        
        // SE O ARGUMENTO ESTIVER VAZIO, VAI RETORNAR UNDEFINED
        if (!nome) resp.send(consultarTodos);
        else resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


export default server;