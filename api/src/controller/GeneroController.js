
import { Router } from "express";
import { AlterarGenero, ApagarGenero, CadastrarGeneros, ConsultarGeneros, ConsultarTodosGeneros } from "../repository/GeneroRepository.js";


const server = Router();


server.get('/genero/:pesquisa?', async (req, resp) => {
    try {
        const { pesquisa } = req.params;

        if (!pesquisa) var resposta = await ConsultarTodosGeneros();
        else var resposta = await ConsultarGeneros(pesquisa);

        resp.send(resposta);
    } catch(err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/genero/cadastrar', async (req, resp) => {
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

server.put('/genero/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const { nomeGenero } = req.body;

        const reposta = await AlterarGenero(id, nomeGenero);

        resp.send();

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.delete('/genero/deletar/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await ApagarGenero(id);

        resp.send();    

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;

