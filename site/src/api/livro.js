    

import axios from "axios";
import { API_URL } from "./config";
const api = axios.create({
    baseURL: API_URL
})

export async function CadastrarLivro(idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn) {
    const r = await api.post('/livros/cadastrar', {
        idGenero,
        idCor,
        idSituacao,
        idPrateleira,
        nomeLivro,
        nomeAutor,
        nomePublicadora,
        observacoes,
        isbn
    });
    return r.data
}


export async function ConsultarTodosLivros() {
    const r = await api.get('/livros')
    return r.data
}


export async function DeletarLivro(idLivro) {
    const r = await api.delete(`/adm/deletar/livro?id=${idLivro}`);
    return r.data
}

export async function BuscarLivroPorId(idLivro) {
    const r = await api.get(`/livros/${idLivro}`);
    return r.data[0];
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

export async function ConsultarLivroPorCodigo(codigo) {
    const r = await api.get(`/livros/${codigo}`);
    return r.data
}