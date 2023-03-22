import { Router } from "express";

import { AlterarEmprestimo, ConsultarEmprestimos, ConsultarPorData, ConsultarTodosEmprestimos, DeletarEmprestimo, RealizarEmprestimos } from "../repository/EmprestimosRepository.js";
import { VerificarCamposEmprestimo } from "../assets/VerificarCamposEmprestimo.js";

const server = Router();

server.get('/emprestimos/:pesquisa?/:data?', async (req, resp) => {
    try {
        const { pesquisa, data} = req.query;
        
        if (!pesquisa && !data) var resposta = await ConsultarTodosEmprestimos();
        else if (!pesquisa) var resposta = await ConsultarPorData(data);
        else if (!data) var resposta = await ConsultarEmprestimos(pesquisa);
        // else var resposta = await ConsultarTodosEmprestimos();
        
        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
});


server.post('/emprestimo/cadastrar', async (req, resp) => {
    try {
        const { idUsuario, idLivro, dataRetirada, dataEntrega} = req.body;
        
        VerificarCamposEmprestimo(idUsuario, idLivro, dataRetirada, dataEntrega);
        
        const resposta = await RealizarEmprestimos(idUsuario, idLivro, dataRetirada, dataEntrega);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.delete('/emprestimo/deletar/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        if (!id) throw new Error('Informe o ID do livro que deseja deletar!');

        const resposta = await DeletarEmprestimo(id);

        resp.send();

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.put('/emprestimo/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params

        if (!id) throw new Error("ID Obrigatório para alterar as informações de um livro!")
        
        const resposta = await AlterarEmprestimo(id);

        resp.send();
        
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;