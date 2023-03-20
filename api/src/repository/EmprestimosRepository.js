import { con } from "./connection.js";


export async function ConsultarEmprestimos(pesquisa) {
    const comando =
        `   
        SELECT 	id_emprestimo			id,
		        nm_usuario				usuario,
		        nm_livro				livro,
                nm_situacao_emprestimo	situacao,
                dt_retirada				data_retirada,
                dt_entrega				data_entrega
	    FROM tb_emprestimo
		        INNER JOIN tb_usuario ON tb_emprestimo.id_usuario = tb_usuario.id_usuario
                INNER JOIN tb_livro	ON tb_emprestimo.id_livro = tb_livro.id_livro
		        INNER JOIN tb_situacao_emprestimo ON tb_emprestimo.id_situacao_emprestimo = tb_situacao_emprestimo.id_situacao_emprestimo
	    WHERE id_emprestimo = ? OR nm_usuario LIKE ? OR tb_situacao_emprestimo.nm_situacao_emprestimo LIKE ?;
        `
    const [linhas] = await con.query(comando, [pesquisa, `%${pesquisa}%`, `%${pesquisa}%`])
    return linhas
} 


export async function ConsultarPorData(data) {
    const comando =
        `
        SELECT 	id_emprestimo			id,
                nm_usuario				usuario,
                nm_livro				livro,
                nm_situacao_emprestimo	situacao,
                dt_retirada				data_retirada,
                dt_entrega				data_entrega
        FROM tb_emprestimo
            INNER JOIN tb_usuario ON tb_emprestimo.id_usuario = tb_usuario.id_usuario
            INNER JOIN tb_livro	ON tb_emprestimo.id_livro = tb_livro.id_livro
            INNER JOIN tb_situacao_emprestimo ON tb_emprestimo.id_situacao_emprestimo = tb_situacao_emprestimo.id_situacao_emprestimo
        WHERE dt_retirada = ? OR dt_entrega = ?;
        `
    const [linhas] = await con.query(comando, [data, data]);
    return linhas
}

export async function ConsultarTodosEmprestimos() {
    const comando =
        `
        SELECT 	id_emprestimo			id,
                nm_usuario				usuario,
                nm_livro				livro,
                nm_situacao_emprestimo	situacao,
                dt_retirada				data_retirada,
                dt_entrega				data_entrega
        FROM tb_emprestimo
            INNER JOIN tb_usuario ON tb_emprestimo.id_usuario = tb_usuario.id_usuario
            INNER JOIN tb_livro	ON tb_emprestimo.id_livro = tb_livro.id_livro
            INNER JOIN tb_situacao_emprestimo ON tb_emprestimo.id_situacao_emprestimo = tb_situacao_emprestimo.id_situacao_emprestimo;
        `
    const [linhas] = await con.query(comando);
    return linhas
}


export async function RealizarEmprestimos(idUsuario, idLivro, id_situacao_emprestimo, dataRetirada, dataEntrega) {
    const comando = 
        `    
    INSERT INTO tb_emprestimo(id_usuario, id_livro, id_situacao_emprestimo, dt_retirada, dt_entrega)
        VALUES(?, ?, 1, ?, ?);
        `
    const resposta = await con.query(comando, [idUsuario, idLivro, id_situacao_emprestimo, dataRetirada, dataEntrega]);
}


export async function AlterarEmprestimo(idEmprestimo, idLivro, id_situacao_emprestimo, dataRetirada, dataEntrega) {
    const comando =
        `
    UPDATE tb_emprestimo
        SET id_livro                =   ?,
            id_situacao_emprestimo  =   ?,
            dt_retirada             =   ?,
            dt_entrega              =   ?
        WHERE id_emprestimo = ?;
        `
    const resposta = await con.query(comando, [idLivro, id_situacao_emprestimo, dataRetirada, dataEntrega, idEmprestimo]);
}


export async function DeletarEmprestimo(idEmprestimo) {
    const comando =
        `
    DELETE FROM 
        tb_emprestimo
            WHERE id_emprestimo = ?;
        `
    const resposta = await con.query(comando, idEmprestimo);
}