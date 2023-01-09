
import { CadastrarNascionalidade, ConsultarNacionalidades } from "../repository/NascionalidadeRepository.js"

import { Router } from "express"

const server = Router();

server.post('/adm/cadastrar/nacionalidades', async (req, resp) => {
    try {
        const { nome } = req.body
        const resposta = await CadastrarNascionalidade(nome);

        resp.send()
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})



server.get('/adm/consulta/nascionalidades/:nome?', async (req, resp) => {
    try {
        const {nome} = req.params
        const resposta = await ConsultarNacionalidades(nome);
        const ConsultarTodos = await ConsultarNacionalidades("");
        if (!nome) resp.send(ConsultarTodos);
        else resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;