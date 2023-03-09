
import { Router } from "express";

import { AlterarInformacoesDoLivro, CadastrarLivro, DeletarLivro, ConsultarLivros, ConsultarTodosLivros } from "../repository/LivroRepository.js";
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


server.get('/livros/:pesquisa?/:codigo?/:id_livro?', async (req, resp) => {
    try {
        const {pesquisa, codigo, id_livro} = req.query

        if (!pesquisa && !codigo && !id_livro) var resposta = await ConsultarTodosLivros();

        else var resposta = await ConsultarLivros(pesquisa, codigo, id_livro);

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

server.get('/adm/consulta/livro/emprestimo/:codigo', async (req, resp) => {
    try {
        const { codigo } = req.params;
        const resposta = await ConsultarLivroPorCodigo(codigo);

        resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


export default server;