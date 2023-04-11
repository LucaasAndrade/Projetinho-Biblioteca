

import { Router } from "express";
import ConsultarSituacaoes from "../repository/SituacaoRepository.js";



const server = Router();


server.get('/situacao', async (req, resp) => {
    try {
        const resposta = await ConsultarSituacaoes();

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


export default server