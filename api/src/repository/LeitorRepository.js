

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
            INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso
        ORDER BY id_usuario;
        `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function CadastrarLeitor(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, codigo, observacoes) {
    const comando =
        `  
        INSERT INTO tb_usuario(id_curso, id_turma_curso, nm_usuario, nr_telefone, ds_codigo, ds_observacoes, nr_livros_lidos, nr_livros_atrasados)
            VALUES(?, ?, ?, ?, ?, ?, 0, 0);
        `
    const resposta = await con.query(comando, [idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, codigo, observacoes])
}  


export async function DeletarLeitor(idLeitor) {
    const comando =
        `
        DELETE FROM tb_usuario
            WHERE id_usuario = ?
        `
    const resposta = await con.query(comando, [idLeitor]);
}


export async function BuscarLeitorPorId(idLeitor) {
    const comando = 
        `
        SELECT 
           id_usuario                      id,
            nm_usuario                      leitor,
            nr_telefone                     telefone,
            ds_observacoes                  observacoes,
            tb_curso.id_curso               idCurso,
            nm_curso                        curso,
            tb_turma_curso.id_turma_curso   idTurma,
            nm_turma                        turma,
            nr_livros_lidos                 livros_lidos,
            nr_livros_atrasados             livros_atrasados,
            ds_codigo                       codigo
        FROM tb_usuario
            INNER JOIN tb_curso ON tb_usuario.id_curso = tb_curso.id_curso
            INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso
        WHERE id_usuario = ?;
        `
    const [linhas] = await con.query(comando, [idLeitor]);
    return linhas[0];
}

export async function AlterarInformacoesUsuario(idUsuario, nomeUsuario, telefone, observacoes) {
    const comando =
        `
        UPDATE tb_usuario
            SET
                nm_usuario      =   ?,
                nr_telefone     =   ?,
                ds_observacoes  =   ?
            WHERE id_usuario = ?;
        `
    const reposta = con.query(comando, [nomeUsuario, telefone, observacoes, idUsuario])
}