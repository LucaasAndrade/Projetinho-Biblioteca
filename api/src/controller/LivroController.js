
import { Router } from "express";

import { CadastrarLivro, ListarTodosLivros } from "../repository/LivroRepository.js";
import {GeradorDeCodigo} from "../assets/GeradorCodigo.js";
import { VerificarCampos } from '../assets/VerificarCamposLivros.js'

const server = Router();

server.post('/adm/cadastrar/livro', async (req, resp) => {
    try {
        const { idAutor, idGenero, nomeLivro, observacoes } = req.body;
        const codigo = GeradorDeCodigo(5);
        VerificarCampos(idAutor, idGenero, nomeLivro)
        if(!observacoes)  await CadastrarLivro(idAutor, idGenero, nomeLivro, "Nenhuma Observação!", codigo);
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

export default server;