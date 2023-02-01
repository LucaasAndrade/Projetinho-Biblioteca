
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