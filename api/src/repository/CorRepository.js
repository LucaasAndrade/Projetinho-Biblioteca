
import { con } from './connection.js';



export default async function ConsultarCores() {
    const comando = 
        `
    SELECT  
        id_cor          id,
        nm_cor          cor
    FROM tb_cor;
        `
    const [linhas] = await con.query(comando);
    return linhas;
}