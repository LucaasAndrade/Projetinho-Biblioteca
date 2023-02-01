

import { API_URL } from "./config";
import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});


export async function ConsultarTodosGeneros() {
    const r = await api.get('/adm/consulta/genero/todos');
    return r.data;
}

