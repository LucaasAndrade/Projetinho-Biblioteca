
import { API_URL } from "./config";
import axios from "axios";

const api = axios.create({
    baseURL: API_URL
});


export async function ConsultarAutoresLivros(autor) {
    if (!autor) var r = await api.get('/adm/consulta/autores/');
    else var r = await api.get(`/adm/consulta/autores/${autor}`)
    return r.data
}