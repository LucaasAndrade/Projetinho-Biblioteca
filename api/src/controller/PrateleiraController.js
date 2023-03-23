
import { Router } from "express";
import { AlterarPrateleira, CadastrarPrateleira, ConsultarPrateleiras, DeletarPrateleira } from "../repository/PrateleiraRepository.js";



const server = Router();

server.get('/prateleiras', async (req, resp) => {
    try {
        
        const resposta = await ConsultarPrateleiras();

        resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.post('/prateleira/cadastrar', async (req, resp) => {
    try {
        const { numero, observacoes } = req.body;

        if (!numero) throw new Error("Informe o Número da prateleira");
        if (!observacoes) throw new Error("Digite alguma observação!");

        const respota = await CadastrarPrateleira(numero, observacoes);
             
        resp.send();
    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})

server.put('/prateleira/alterar/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const { numero, observacoes } = req.body;

        if (!id) throw new Error('Informe qual prateleira deseja alterar!');
        
        const resposta = await AlterarPrateleira(id, numero, observacoes);

        resp.send();

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})


server.delete('/prateleira/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        
        const reposta = await DeletarPrateleira(id);

        req.send();

    } catch (err) {
        resp.status(401).send({
            error: err.message
        })
    }
})