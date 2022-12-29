import { EmprestimosAtivos } from "../repository/EmprestimosRepository.js";
import { Router } from "express";

const server = Router();

server.get('/emprestimos/consultar/ativos', async (req, resp) => {
    try {
        const resposta = await EmprestimosAtivos();
        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});

export default server;