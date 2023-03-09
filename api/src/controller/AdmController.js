
import { AdmLogin } from "../repository/AdmRepostory.js";
import { Router } from 'express';


const server = Router();

server.post('/adm/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await AdmLogin(email, senha);
        
        if (!resposta) throw new Error('Credenciais Inválidas!');

        resp.send(resposta);

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


server.get('/ping', (req, resp) => {
    resp.send("Pong!")
})

export default server;  