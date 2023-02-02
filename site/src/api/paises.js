
import axios from "axios";
import { API_URL } from "./config";
const api = axios.create({
    baseURL: API_URL
})

// API IBGE https://servicodados.ibge.gov.br/api/v1/paises/
export async function ConsultarTodosPaisesFds() {
    const r = await api.get('/adm/consulta/nascionalidades')
    return r.data
}

export async function CadastrarTodosPaises(nome) {
    const r = await api.post('/adm/cadastrar/nacionalidades', {
        nome
    });
    return r.data
}