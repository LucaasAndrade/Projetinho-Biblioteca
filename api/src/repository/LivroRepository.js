

import { con } from "./connection.js";

export async function ConsultarLivros(pesquisa, codigo, idLivro) {
    const comando =   
    `
    SELECT 	id_livro            id,
            nm_genero			genero,
            nm_cor				cor,
            nm_situacao			situacao,
            nr_prateleira	    numeroPrateleira,
            nm_livro			livro,
            nm_autor			autor,
            nm_publicadora		publicadora,
            tb_livro.ds_observacoes		observacoes,
            ds_codigo_isbn		isbn
    FROM tb_livro
        INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
        INNER JOIN tb_cor ON tb_livro.id_cor = tb_cor.id_cor
        INNER JOIN tb_situacao ON tb_livro.id_situacao = tb_situacao.id_situacao
        INNER JOIN tb_prateleira ON tb_livro.id_prateleira = tb_prateleira.id_prateleira
    WHERE ds_codigo_isbn = ? OR nm_livro like ? OR nm_autor like ? OR id_livro = ?;    
    `
    const [linhas] = await con.query(comando, [codigo, `%${pesquisa}%`, `%${pesquisa}%`, idLivro]);
    return linhas
}

export async function ConsultarTodosLivros() {
    const comando =
        `
        SELECT  id_livro            id,
                nm_genero			genero,
                nm_cor				cor,
                nm_situacao			situacao,
                nr_prateleira	    numeroPrateleira,
                nm_livro			livro,
                nm_autor			autor,
                nm_publicadora		publicadora,
                tb_livro.ds_observacoes		observacoes,
                ds_codigo_isbn		isbn
            FROM tb_livro
        INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
        INNER JOIN tb_cor ON tb_livro.id_cor = tb_cor.id_cor
        INNER JOIN tb_situacao ON tb_livro.id_situacao = tb_situacao.id_situacao
        INNER JOIN tb_prateleira ON tb_livro.id_prateleira = tb_prateleira.id_prateleira
            `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function CadastrarLivro(idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn) {
    const comando =
        `
        INSERT INTO tb_livro(id_genero, id_cor, id_situacao, id_prateleira, nm_livro, nm_autor, nm_publicadora, ds_observacoes, ds_codigo_isbn)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);
        `
    const resposta = await con.query(comando, [idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn]);
}


export async function DeletarLivro(livroId) {
    const comando =
        `
        DELETE FROM tb_livro
            WHERE id_livro = ?;
        `
    const resposta = await con.query(comando, [livroId])
}


export async function AlterarInformacoesDoLivro(idLivro, idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes, isbn) {
    const comando = 
        `
        UPDATE tb_livro
            SET
                id_genero = ?,
                id_cor = ?,
                id_situacao = ?,
                id_prateleira = ?,
                nm_livro = ?,
                nm_autor = ?,
                nm_publicadora = ?,
                ds_observacoes = ?,
                ds_codigo_isbn = ?
        WHERE id_livro = ?;
        `
    const resposta = await con.query(comando, [idGenero, idCor, idSituacao, idPrateleira, nomeLivro, nomeAutor, nomePublicadora, observacoes,isbn, idLivro]);
}

