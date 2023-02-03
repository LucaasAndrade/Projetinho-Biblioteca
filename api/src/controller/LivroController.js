
import { Router } from "express";

import { AlterarInformacoesDoLivro, CadastrarLivro, ConsultarLivroPorId, DeletarLivro, ListarTodosLivros } from "../repository/LivroRepository.js";
import {GeradorDeCodigo} from "../assets/GeradorCodigo.js";
import { VerificarCampos } from '../assets/VerificarCamposLivros.js'

const server = Router();

server.post('/adm/cadastrar/livro', async (req, resp) => {
    try {
        const { idAutor, idGenero, nomeLivro, observacoes } = req.body;
        const codigo = GeradorDeCodigo(5);

        VerificarCampos(idAutor, idGenero, nomeLivro);

        if (!observacoes) await CadastrarLivro(idAutor, idGenero, nomeLivro, "Nenhuma Observação!", codigo);
        else await CadastrarLivro(idAutor, idGenero, nomeLivro, observacoes, codigo);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.get('/adm/consulta/livros', async (req, resp) => {
    try {
        const resposta = await ListarTodosLivros();

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.delete('/adm/deletar/livro:id?', async (req, resp) => {
    try {
        const id = req.query.id

        if (!id) throw new Error('Por Favor, informe um id!')
        
        const resposta = await DeletarLivro(id);

        resp.send();
    } catch(err) {
        resp.status(401).send({
            error: err.message
        })     
    }
})


server.get('/adm/consulta/livro/:id?', async (req, resp) => {
    try {
        const id = req.params.id
        console.log(id);
        if (!id) throw new Error('Por Favor, informe um id!')
        
        const resposta = await ConsultarLivroPorId(id);

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.put('/adm/alterar/livro/:id', async (req, resp) => {
    try {
        const { idAutor, idGenero, nomeLivro, observacoes } = req.body;
        const { id } = req.params
        
        VerificarCampos(idAutor, idGenero, nomeLivro);

        if (!observacoes) await AlterarInformacoesDoLivro(idAutor, idGenero, nomeLivro, "Nenhuma Observação!", id);
        else await AlterarInformacoesDoLivro(idAutor, idGenero, nomeLivro, observacoes, id);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


export default server;