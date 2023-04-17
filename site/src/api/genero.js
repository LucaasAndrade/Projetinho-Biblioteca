

import { API_URL } from "./config";
import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});


export async function ConsultarTodosGeneros() {
    const r = await api.get('/genero');
    return r.data;
}

export async function ConsultarGeneroPorId(id) {
    const r = await api.get(`/genero/${id}`);
    return r.data
}

export async function CadastrarGeneroDB(nomeGenero) {
    const r = await api.post('/genero/cadastrar', {
        nomeGenero
    });
    return r.data
}

export async function AlterarGenero(nomeGenero, id) {
    const r = await api.put(`/alterar/genero/${id}`, {
        nomeGenero
    });
    return r.data
}


export async function DeletarGeneroBD(id) {
    const r = await api.delete(`/genero/deletar/${id}`);
    return r.data
}