import { con } from "./connection.js";


export async function ConsultarTurmas(cursoId) {
    const comando =
        `
    SELECT	id_turma_curso				id,
	    	nm_curso					curso,
            nm_turma					turma,
            nr_ano						ano
    FROM tb_turma_curso
    	INNER JOIN tb_curso	ON tb_turma_curso.id_curso	= 	tb_curso.id_curso
    WHERE tb_turma_curso.id_curso = ?;
        `
    const [linhas] = await con.query(comando, [cursoId]);
    return linhas;
}  

export async function CadastrarTurmas(cursoId, anoTurma, nomeTurma) {
    const comando = 
        `
    INSERT INTO tb_turma_curso(id_curso, nm_turma, nr_ano)
        VALUES(?, ?, ?);
        `
    const resposta = await con.query(comando, [cursoId, anoTurma, nomeTurma]);
}

export async function DeletarTurmas(cursoId) {
    const comando =
        `
    DELETE FROM tb_turma_curso
        WHERE id_turma_curso = ?
        `
    const resposta = await con.query(comando,  cursoId)
}

export async function AlterarNomeTurma(cursoId, nomeTurma) {
    const comando =
        `
        UPDATE tb_turma_curso
            SET nm_turma = ?
        WHERE id_turma_curso = ?;
        `
    const resposta = await con.query(comando, [cursoId, nomeTurma]);
}
