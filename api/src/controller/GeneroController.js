
import { Router } from "express";
import { CadastrarGeneros, ConsultarTodosGeneros } from "../repository/GeneroRepository.js";


const server = Router();


server.get('/adm/consulta/genero/todos', async (req, resp) => {
    try {
        const resposta = await ConsultarTodosGeneros();
        resp.send(resposta);
    } catch(err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/adm/cadastrar/genero', async (req, resp) => {
    try {
        const { nomeGenero } = req.body;
        
        if (!nomeGenero) throw new Error('Escreva o nome de um gênero literário!')
        const resposta = await CadastrarGeneros(nomeGenero);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;