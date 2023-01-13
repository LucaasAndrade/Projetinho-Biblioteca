

import { con } from './connection.js'

export async function ListarLeitores() {
    const comando = 
        `
        SELECT 
            id_usuario                  id,
            nm_usuario                  leitor,
            nm_curso                    curso,
            nm_turma                    turma,
            nr_livros_lidos             livros_lidos,
            nr_livros_atrasados         livros_atrasados,
            ds_codigo                   codigo
        FROM tb_usuario
            INNER JOIN tb_curso ON tb_usuario.id_curso = tb_curso.id_curso
            INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso;
        `
    const [linhas] = await con.query(comando);
    return linhas;
}