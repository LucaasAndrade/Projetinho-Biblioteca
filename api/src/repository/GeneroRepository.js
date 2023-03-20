
import { con } from "./connection.js";


export async function ConsultarGeneros(pesquisa) {
    const comando = 
        `
        SELECT  id_genero           id,
                nm_genero           genero
            FROM tb_genero
        WHERE nm_genero like ? OR id_genero = ?;
        `
    const [linhas] = await con.query(comando, [`%${pesquisa}%`, pesquisa]);
    return linhas;
}


export async function ConsultarTodosGeneros() {
    const comando = 
        `
        SELECT  id_genero           id,
                nm_genero           genero
              FROM tb_genero;
        `
    const [linhas] = await con.query(comando);
    return linhas
}


export async function CadastrarGeneros(nomeGenero) {
    const comando = 
        `
        INSERT INTO tb_genero(nm_genero)
            VALUES(?);
        `
    const resposta = await con.query(comando, [nomeGenero])
}


export async function AlterarGenero(idGenero, nomeGenero) {
    const comando =
        `
        UPDATE tb_genero
			SET 
				nm_genero	=	?
			WHERE id_genero = ?;
        `
    const resposta = await con.query(comando, [nomeGenero, idGenero]);
}


export async function ApagarGenero(id) {
    const comando =
        `
        DELETE FROM tb_genero
            WHERE id_genero = ?
        `
    const resposta = await con.query(comando, id);
}