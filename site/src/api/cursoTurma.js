

import axios from 'axios';
import { API_URL } from './config'
const api = axios.create({
    baseURL: API_URL
});

export async function ConsultarTodosCursos() {
    const r = await api.get('/adm/consulta/cursos');
    return r.data
}

export async function ConsultarTurmasCurso(id) {
    const r = await api.get(`/adm/consulta/turmas/${id}`)
    return r.data;
}