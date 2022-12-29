

import { API_URL } from "./config";

import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});

export async function EmprestimosAtivos() {
    const r = await api.get('/emprestimos/consultar/ativos');
    return r.data
}