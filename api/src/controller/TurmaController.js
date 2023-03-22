

import { Router } from "express";


import { AlterarNomeTurma, CadastrarTurmas, ConsultarTurmas, DeletarTurmas } from "../repository/TurmaRepository.js";


const server = Router();

server.get('/turmas', async (req, resp) => {
    try {
        const { cursoId, anoTurma } = req.body;

        if (!cursoId) throw new Error('Informe um curso!');
        if (!anoTurma) throw new Error('Informe uma turma!');

        const resposta = await ConsultarTurmas(cursoId, anoTurma);

        resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.post('/turmas/cadastrar', async (req, resp) => {
    try {
        const { cursoId, anoTurma, nomeTurma } = req.body;

        if (!cursoId) throw new Error('Informe um curso!');
        if (!anoTurma) throw new Error('Informe o ano da Turma');
        if (!nomeTurma) throw new Error('Informe o nome da Turma!');

        const resposta = await CadastrarTurmas(cursoId, anoTurma, nomeTurma);

        resp.send();

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.delete('/turmas/deletar/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        if (!id) throw new Error('Informe a turma que deseja Deletar!');

        const resposta = await DeletarTurmas(id);

        resp.send();

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.put('/turmas/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const { nomeTurma } = req.body;

        if (!id) throw new Error('Informe a turma que deseja Alterar!');
        if (!nomeTurma) throw new Error('Informe o nome da turma');

        const resposta = await AlterarNomeTurma(id, nomeTurma);

        resp.send();
        
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;