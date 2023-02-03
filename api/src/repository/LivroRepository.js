

import { con } from "./connection.js";


export async function CadastrarLivro(idGenero, idAutor, nomeLivro, observacoes, codigo) {
    const comando =
        `
        INSERT INTO tb_livro(id_autor, id_genero, nm_livro, ds_observacoes, ds_codigo)
            VALUES (?, ?, ?, ?,?);
        `
    const resposta = await con.query(comando, [idGenero, idAutor, nomeLivro, observacoes, codigo]);
}




export async function ListarTodosLivros() {
    const comando = 
        `
        SELECT      
                tb_livro.id_livro            id,
                nm_autor                     autor,
                nm_genero                    genero,
                nm_livro                     livro,
                tb_livro.ds_observacoes      observacoes,
                ds_codigo                    codigo
            FROM tb_livro
        INNER JOIN tb_autor ON tb_livro.id_autor = tb_autor.id_autor
        INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
            ORDER BY id_livro;
        `
    const [linhas] = await con.query(comando);
    return linhas
}


export async function DeletarLivro(livroId) {
    const comando =
        `
        DELETE FROM tb_livro
            WHERE id_livro = ?
        `
    const resposta = await con.query(comando, [livroId])
}


export async function ConsultarLivroPorId(idLivro){
    const comando =
        `
        SELECT      
            tb_livro.id_livro            id,
            tb_autor.id_autor           autor,
            nm_autor                    nome_autor,
            tb_genero.id_genero         genero,
            nm_genero                   nome_genero,
            nm_livro                     livro,
            tb_livro.ds_observacoes      observacoes,
            ds_codigo                    codigo
        FROM tb_livro
            INNER JOIN tb_autor ON tb_livro.id_autor = tb_autor.id_autor
            INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
        WHERE id_livro = ?;
        `
    const [linhas] = await con.query(comando, [idLivro]);
    return linhas[0];
}



export async function AlterarInformacoesDoLivro(idAutor, idGenero, nomeLivro, dsObservacoes, idLivro) {
    const comando = 
        `
        UPDATE tb_livro
            SET 
                id_autor = ?,
                id_genero = ?,
                nm_livro = ?,
                ds_observacoes = ?
        WHERE id_livro = ?;
        `
    const resposta = await con.query(comando, [idAutor, idGenero, nomeLivro, dsObservacoes, idLivro]);
}