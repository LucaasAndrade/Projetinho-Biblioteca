

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