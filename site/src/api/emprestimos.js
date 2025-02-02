

import { API_URL } from "./config";

import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});

export async function EmprestimosAtivos() {
    const r = await api.get('/emprestimos');
    return r.data
}


export async function ConsultarTodosEmprestimos() {
    const r = await api.get('/emprestimos');
    return r.data
}

export async function CadastrarNovoEmprestimo(idUsuario, idLivro, dataDeRetirada, dataDeEntrega) {
    const r = await api.post('/adm/emprestimo/cadastrar', {
        idUsuario,
        idLivro,
        dataDeRetirada,
        dataDeEntrega
    });
    return r.data
}