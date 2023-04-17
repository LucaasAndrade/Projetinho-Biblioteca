
import { con } from "./connection.js";


export default async function ConsultarSituacaoes() {
    const comando = 
        `
    SELECT 
        id_situacao         id,
        nm_situacao         situacao
    FROM tb_situacao
        `
    const [linhas] = await con.query(comando);
    return linhas
}