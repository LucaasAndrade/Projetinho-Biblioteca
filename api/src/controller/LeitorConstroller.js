
import { Router } from 'express'

import { ListarLeitores } from '../repository/LeitorRepository.js'

const server = Router();


server.get('/adm/consulta/leitores', async (req, resp) => {
    try {
        const resposta = await ListarLeitores();
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


export default server;