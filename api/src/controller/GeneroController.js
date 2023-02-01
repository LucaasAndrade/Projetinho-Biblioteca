
import { Router } from "express";
import { ConsultarTodosGeneros } from "../repository/GeneroRepository.js";


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


export default server;