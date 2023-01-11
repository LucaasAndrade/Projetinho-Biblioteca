
import { CadastrarLivro, ListarTodosLivros } from "../repository/LivroRepository.js";
import { Router } from "express";
import GeradorDeCodigoLivro from "../assets/GeradorCodigoLivro.js";

const server = Router();

server.post('/adm/cadastrar/livro', async (req, resp) => {
    try {
        const { idAutor, idGenero, nomeLivro, observacoes } = req.body;
        const codigo = GeradorDeCodigoLivro();        
        const resposta = await CadastrarLivro(idAutor, idGenero, nomeLivro, observacoes, codigo);
        
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