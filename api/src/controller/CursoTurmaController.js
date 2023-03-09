
import { Router } from "express";

import { ListarCursos, CadastrarCurso, ListarTurmasDeCurso, CadastrarTurmaDeCurso } from "../repository/CursoTurmaRepository.js";

const server = Router();

server.get('/cursos', async (req, resp) => {
    try {
        const resposta = await ListarCursos();
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/cursos/cadastrar', async (req, resp) => {
    try {
        const { nomeCurso } = req.body;
        if(!nomeCurso) throw new Error("Não tem como cadastrar um curso sem nome!")
        const resposta = await CadastrarCurso(nomeCurso);
        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.get('/turmas/:curso', async (req, resp) => {
    try {
        const { curso } = req.params;
        if (!curso) throw new Error("Por favor, informe um curso!");
        
        const resposta = await ListarTurmasDeCurso(curso);

        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/turmas/cadastrar/:curso', async (req, resp) => {
    try {
        const { idCurso, nmTurma } = req.body;
        if (!nmTurma) throw new Error("Nome da Turma é obrigatório!");
        const resposta = await CadastrarTurmaDeCurso(idCurso, nmTurma);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;