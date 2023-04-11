

import { API_URL } from "./config";
import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});


export async function ConsultarTodosGeneros() {
    const r = await api.get('/genero');
    return r.data;
}

export async function CadastrarGeneroNoBancoDeDados(nomeGenero) {
    const r = await api.post('/adm/cadastrar/genero/', {
        nomeGenero
    });
    return r.data
}