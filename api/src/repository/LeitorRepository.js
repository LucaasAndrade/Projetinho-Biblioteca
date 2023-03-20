

import { con } from './connection.js'

export async function ConsultarLeitores(pesquisa) {
    const comando =
        `
        SELECT 
            id_usuario				id,
            nm_curso				curso,
            nm_turma				turma,
            nm_usuario				leitor,
            nr_telefone				telefone,
            ds_cpf					cpf,
            ds_observacoes			observacoes,
            ds_foto_perfil			foto_perfil,
            nr_livros_atrasados		livros_atrasados
	FROM tb_usuario
		INNER JOIN tb_curso ON tb_usuario.id_curso = tb_curso.id_curso
        INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso
	WHERE nm_curso LIKE ? OR ds_cpf = ? OR nm_usuario LIKE ? OR id_usuario = ?;
        `
    const [linhas] = await con.query(comando, [`%${pesquisa}%`, pesquisa, `%${pesquisa}%`, pesquisa]);
    return linhas;
}

export async function ConsultarTodosLeitores() {
    const comando =
        `
        SELECT 
            id_usuario				id,
            nm_curso				curso,
            nm_turma				turma,
            nm_usuario				leitor,
            nr_telefone				telefone,
            ds_cpf					cpf,
            ds_observacoes			observacoes,
            ds_foto_perfil			foto_perfil,
            nr_livros_atrasados		livros_atrasados
	FROM tb_usuario
		INNER JOIN tb_curso ON tb_usuario.id_curso = tb_curso.id_curso
        INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso;
        `
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function CadastrarLeitor(idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, cpf, observacoes) {
    const comando =
        `     
        INSERT INTO tb_usuario(id_curso, id_turma_curso, nm_usuario, nr_telefone, ds_cpf, ds_observacoes, nr_livros_atrasados)
            VALUES(?, ?, ?, ?, ?, ?, 0);
        `
    const resposta = await con.query(comando, [idCurso, idTurmaCurso, nomeUsuario, numeroTelefone, cpf, observacoes])
}


export async function DeletarLeitor(idLeitor) {
    const comando =
        `
        DELETE FROM tb_usuario
            WHERE id_usuario = ?
        `
    const resposta = await con.query(comando, [idLeitor]);
}

export async function AlterarInformacoesUsuario(idUsuario, idCurso, idTurmaCurso, nomeUsuario, telefone, cpf,observacoes) {
    const comando =
        `
        UPDATE tb_usuario
            SET
                id_curso        =   ?,
                id_turma_curso  =   ?,
                nm_usuario      =   ?,
                nr_telefone     =   ?,
                ds_cpf          =   ?,
                ds_observacoes  =   ?
            WHERE id_usuario = ?;
        `
    const reposta = con.query(comando, [idCurso, idTurmaCurso, nomeUsuario, telefone, cpf, observacoes, idUsuario])
}
