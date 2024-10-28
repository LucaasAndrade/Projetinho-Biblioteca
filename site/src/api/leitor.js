


import { API_URL } from "./config";
import axios from "axios";
const api = axios.create({
    baseURL: API_URL
});


export async function ConsultarLeitores() {
    const r = await api.get('/leitor');
    return r.data[0];
}


export async function CadastarUsuario(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, observacoes) {
    const r = await api.post('/adm/cadastrar/leitor', {
        idCurso,
        idTurmaCurso,
        nomeUsuario,
        numeroTelefone,
        observacoes
    });
    return r.data
}


export async function DeletarLeitor(idLeitor) {
    const r = await api.delete(`/adm/deletar/leitor/${idLeitor}`);
    return r.data
}

export async function BuscarLeitorPorId(idLeitor) {
    const r = await api.get(`/adm/consulta/leitor/${idLeitor}`);
    return r.data
}


export async function AlterarInformacoesUsuario(idUsuario, nome, telefone, observacoes) {
    const r = await api.put(`/adm/alterar/leitor/${idUsuario}`, {
        nome,
        telefone,
        observacoes
    });
    return r.data
}


export async function ConsultarLeitorPorCodigo(codigo) {
    const r = await api.get(`/leitor/${codigo}`);
    return r.data[0]
}