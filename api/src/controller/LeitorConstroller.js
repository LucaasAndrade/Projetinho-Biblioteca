
import { Router } from 'express'

import { ListarLeitores, CadastrarLeitor } from '../repository/LeitorRepository.js'
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

server.post('/adm/cadatrar/leitor', async (req, resp) => {
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

export default server;