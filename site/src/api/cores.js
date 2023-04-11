
import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
    baseURL: API_URL
});


export async function ConsultarCores() {
    const r = await api.get('/cores');
    return r.data;
}