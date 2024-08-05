
import { Router } from "express";

import { AlterarInformacoesDoLivro, CadastrarLivro, DeletarLivro, ConsultarLivros, ConsultarTodosLivros } from "../repository/LivroRepository.js";
import { VerificarCampos } from '../assets/VerificarCamposLivros.js'

const server = Router();

server.post('/livros/cadastrar', async (req, resp) => {
    try {
        const { idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn } = req.body;

        VerificarCampos(idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, isbn);

        if (!observacoes) await CadastrarLivro(idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, "Nenhuma Observação!", isbn);
        else await CadastrarLivro(idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn);

        resp.send("Livro Cadastrado com sucesso ✔");

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.get('/livros/:pesquisa?/:codigo?/:id_livro?', async (req, resp) => {
    try {
        const {pesquisa, codigo, id_livro} = req.query

        // SE NÃO PASSAR NENHUM PARÂMETRO DE BUSCA, CONSULTA TODOS REGISTROS.
        if (!pesquisa && !codigo && !id_livro) var resposta = await ConsultarTodosLivros();

        else var resposta = await ConsultarLivros(pesquisa, codigo, id_livro);

        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.delete('/livros/apagar/:id', async (req, resp) => {
    try {
        const id = req.params.id

        if (!id) throw new Error('Por Favor, informe um livro para ser apagado!')
        
        const resposta = await DeletarLivro(id);

        resp.send("Livro apagado com sucesso!");
    } catch(err) {
        resp.status(401).send({
            error: err.message
        })     
    }
})

server.put('/livros/alterar/:id', async (req, resp) => {
    try {
        const { idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn } = req.body;
        const { id } = req.params
        

        const resposta = await AlterarInformacoesDoLivro(id, idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn);

        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

export default server;