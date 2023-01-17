
import { con } from "./connection.js";

export async function ListarCursos() {
    const comando = 
    `
    SELECT *
        FROM tb_curso;
    `
    const [linhas] = await con.query(comando)
    return linhas
}

export async function CadastrarCurso(nomeCurso) {
    const comando =
        `
        INSERT INTO tb_curso(nm_curso)
            VALUES(?);
        `
    const resposta = await con.query(comando, [nomeCurso]);
}


export async function ListarTurmasDeCurso(idCurso) {
    const comando = 
        `    
        SELECT  id_turma_curso                  id,
                nm_curso                        curso,
                nm_turma                        turma
            FROM tb_turma_curso
        INNER JOIN tb_curso ON tb_turma_curso.id_curso = tb_curso.id_curso
            WHERE tb_curso.id_curso = ?;
        `
    const [linhas] = await con.query(comando, [idCurso]);
    return linhas
}

export async function CadastrarTurmaDeCurso(idCurso, nomeTurma) {
    const comando =
    `
    INSERT INTO tb_turma_curso(id_curso, nm_turma)
	    VALUES(?, ?);
    `
    const resposta = await con.query(comando, [idCurso, nomeTurma]);
}