
import { con } from "./connection.js";


export async function ConsultarTodosGeneros() {
    const comando = 
        `
        SELECT  id_genero           id,
                nm_genero           genero
            FROM tb_genero;
        `
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function CadastrarGeneros(nomeGenero) {
    const comando = 
        `
        INSERT INTO tb_genero(nm_genero)
            VALUES(?)
        `
    const resposta = await con.query(comando, [nomeGenero])
}