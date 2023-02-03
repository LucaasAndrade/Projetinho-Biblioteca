

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


export async function ConsultarTodosLivros() {
    const r = await api.get('/adm/consulta/livros');
    return r.data
}


export async function DeletarLivro(idLivro) {
    const r = await api.delete(`/adm/deletar/livro?id=${idLivro}`);
    return r.data
}

export async function BuscarLivroPorId(idLivro) {
    const r = await api.get(`/adm/consulta/livro/${idLivro}`);
    return r.data
}

export async function AlterarInformacoesDoLivro(idAutor, idGenero, nomeLivro, observacoes, idLivro) {
    const r = await api.put(`/adm/alterar/livro/${idLivro}`, {
        idAutor,
        idGenero,
        nomeLivro,
        observacoes
    })
    return r.data
}