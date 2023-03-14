
import { Router } from 'express'

import { ConsultarLeitores, CadastrarLeitor, DeletarLeitor, AlterarInformacoesUsuario, ConsultarTodosLeitores } from '../repository/LeitorRepository.js'
import { VerificarCamposUsuario } from '../assets/VerificarCamposUsuario.js';

const server = Router();

server.get('/leitor/:pesquisa?', async (req, resp) => {
    try {
        
        const { pesquisa } = req.query
        
        if (!pesquisa) var resposta = await ConsultarTodosLeitores();
        else var resposta = await ConsultarLeitores(pesquisa); 

        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/leitor/cadastrar', async (req, resp) => {
    try {
        const { idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, cpf, observacoes } = req.body;
        
        VerificarCamposUsuario(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, cpf);
         
        if (!observacoes) await CadastrarLeitor(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, cpf, "Nenhuma Observação");
        else await CadastrarLeitor(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, cpf, observacoes);

        resp.send()
    } catch (err) {  
        resp.status(401).send({
            error: err.message
        })
    }
})

server.delete('/leitor/apagar/:id?', async (req, resp) => {
    try {
        const {id} = req.params

        if(!id) throw new Error('Por favor, informe o id de um leitor!')

        const resposta = await DeletarLeitor(id);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})



server.put('/leitor/alterar/:id?', async (req, resp) => {
    try {
        const { id } = req.params;
        const { idCurso, idTurma, nome, telefone, cpf,observacoes } = req.body;
        
        const resposta = await AlterarInformacoesUsuario(Number(id), idCurso, idTurma, nome, telefone, cpf, observacoes);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;