
import { Router } from 'express'

import { ListarLeitores, CadastrarLeitor, DeletarLeitor, BuscarLeitorPorId, AlterarInformacoesUsuario } from '../repository/LeitorRepository.js'
import { GeradorDeCodigo } from '../assets/GeradorCodigo.js'
import { VerificarCamposUsuario } from '../assets/VerificarCamposUsuario.js';

const server = Router();

server.get('/adm/consulta/leitores', async (req, resp) => {
    try {
        const resposta = await ListarLeitores();
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.post('/adm/cadastrar/leitor', async (req, resp) => {
    try {
        const { idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, observacoes } = req.body;
        const codigo = GeradorDeCodigo(7);
        
        VerificarCamposUsuario(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone);
         
        if (!observacoes) await CadastrarLeitor(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, codigo, "Nenhuma Observação");
        else await CadastrarLeitor(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, codigo, observacoes);

        resp.send()
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.delete('/adm/deletar/leitor/:id?', async (req, resp) => {
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


server.get('/adm/consulta/leitor/:id?', async (req, resp) => {
    try {
        const { id } = req.params;
        
        const resposta = await BuscarLeitorPorId(id);

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.put('/adm/alterar/leitor/:id?', async (req, resp) => {
    try {
        const { id } = req.params;
        const { nome, telefone, observacoes } = req.body;
        
        const resposta = await AlterarInformacoesUsuario(Number(id), nome, telefone, observacoes);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;