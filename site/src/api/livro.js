

import axios from "axios";
import { API_URL } from "./config";
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarLivro(idAutor, idGenero, nomeLivro, observacoes) {
    const r = await api.post('/adm/cadastrar/livro', {
        idAutor,
        idGenero,
        nomeLivro,
        observacoes
    });
    return r.data
}