import { ConsultarEmprestimos, EmprestimosAtivos, RealizarEmprestimos } from "../repository/EmprestimosRepository.js";
import { DataAtual } from "../assets/ManipulacaoData.js";
import { Router } from "express";
import { CalcularDataEntrega } from "../assets/CalcularDataEntrega.js";
import { VerificarCamposEmprestimo } from "../assets/VerificarCamposEmprestimo.js";

const server = Router();

server.get('/adm/emprestimos/consultar/ativos', async (req, resp) => {
    try {
        const resposta = await EmprestimosAtivos();
        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});


server.get('/adm/emprestimos/consultar/todos', async (req, resp) => {
    try {
        const resposta = await ConsultarEmprestimos();

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/emprestimo/cadastrar', async (req, resp) => {
    try {
        const { idUsuario, idLivro, dataDeRetirada, dataDeEntrega} = req.body;
        
        VerificarCamposEmprestimo(idUsuario, idLivro, dataDeRetirada, dataDeEntrega);
        
        const resposta = await RealizarEmprestimos(idUsuario, idLivro, dataDeRetirada, dataDeEntrega, true);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;