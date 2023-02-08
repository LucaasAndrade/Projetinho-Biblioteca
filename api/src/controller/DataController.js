
import { Router } from "express";
import { CalcularDataEntrega } from "../assets/CalcularDataEntrega.js";
import { DataAtual } from "../assets/ManipulacaoData.js";

const server = Router();



server.get('/adm/consulta/data/atual&entrega', (req, resp) => {
    try {
        const data = DataAtual();
        const dataEntrega = CalcularDataEntrega(data)
        resp.send([data, dataEntrega]);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
     })   
    }
})


export default server;
