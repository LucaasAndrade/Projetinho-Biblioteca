import { con } from './connection.js';


export async function AdmLogin(email, senha) {
    const comando = 
        `
    SELECT 	id_adm_login			id_login,
            nm_adm					nome,
            ds_chave_login			chaveLogin
    FROM tb_adm_login
        INNER JOIN tb_adm ON tb_adm_login.id_adm = tb_adm.id_adm
    WHERE tb_adm_login.ds_chave_login = ? AND tb_adm_login.ds_senha = ?;
        `
    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}