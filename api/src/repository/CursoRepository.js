
import { con } from "./connection.js";

export async function ConsultarCursos() {
    const comando = 
    `
    SELECT 	id_curso		id,
            nm_curso		nomeCurso
        FROM tb_curso;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function CadastrarCurso(nomeCurso) {
    const comando =
        `
        INSERT INTO tb_curso(nm_curso)
            VALUES(?);
        `
    const resposta = await con.query(comando, [nomeCurso]);
}


export async function AlterarNomeCurso(idCurso, nomeCurso) {
    const comando =
    `
    UPDATE tb_curso
        SET nm_curso = ?
    WHERE id_curso = ?
    `
    const resposta = await con.query(comando, [nomeCurso, idCurso]);
}


export async function DeletarCurso(idCurso) {
    const comando =
        `
    DELETE FROM 
     tb_curso 
    WHERE id_curso = ?
        `
    const resposta = con.query(comando, idCurso);
}