
import { Router } from "express";
import ConsultarCores from "../repository/CorRepository.js";

const server = Router();


server.get('/cores', async (req, resp) => {
    try {
        const resposta = await ConsultarCores();

        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


export default server;