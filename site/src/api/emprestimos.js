

import { API_URL } from "./config";

import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});

export async function EmprestimosAtivos() {
    const r = await api.get('/adm/emprestimos/consultar/ativos');
    return r.data
}


export async function ConsultarTodosEmprestimos() {
    const r = await api.get('/adm/emprestimos/consultar/todos');
    return r.data
}