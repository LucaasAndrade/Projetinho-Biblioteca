

import axios from "axios";
import { API_URL } from "./config";
const api = axios.create({
    baseURL: API_URL
});


export async function BuscarData() {
    const r = await api.get('/adm/consulta/data/atual&entrega');
    return r.data
}