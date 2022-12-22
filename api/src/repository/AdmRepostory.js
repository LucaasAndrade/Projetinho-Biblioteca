import { con } from './connection.js';


export async function AdmLogin(email, senha) {
    const comando = 
        `
    SELECT 	*
        FROM tb_adm_login
    WHERE ds_chave_login = ?
        AND ds_senha = ?
        `
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}