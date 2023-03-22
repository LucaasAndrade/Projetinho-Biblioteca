
import { Router } from "express";

import { ConsultarCursos, CadastrarCurso, AlterarNomeCurso, DeletarCurso } from "../repository/CursoRepository.js";

const server = Router();

server.get('/cursos', async (req, resp) => {
    try {

        const resposta = await ConsultarCursos();

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
       
        if (!nomeCurso) throw new Error("Não tem como cadastrar um curso sem nome!")
        
        const resposta = await CadastrarCurso(nomeCurso);
      
        resp.send()
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.put('/cursos/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const { nomeCurso } = req.body;

        if (!id) throw new Error('Informe qual curso deseja alterar!')
        if(!nomeCurso) throw new Error('Informe o nome do curso!')

        const resposta = await AlterarNomeCurso(id, nomeCurso);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }

})

server.delete('/cursos/deletar/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        if (!id) throw new Error('Informe o curso que deseja deletar!');
        
        const resposta = await DeletarCurso(id);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;