import { con } from "./connection.js";

export async function EmprestimosAtivos() {
    const comando = 
        `    
    SELECT count(id_emprestimo) as Emprestimos_Ativos
        FROM tb_emprestimo
    WHERE bl_ativo = 1;
        `
    const [linhas] = await con.query(comando);
    return linhas[0];
}

export async function RealizarEmprestimos(idUsuario, idLivro, dataRetirada, dataEntrega, ativo) {
    const comando = 
        `    
    INSERT INTO tb_emprestimo(id_usuario, id_livro, dt_retirada, dt_entrega, bl_ativo)
        VALUES(?, ?, ?, ?, ?);
        `
    const resposta = await con.query(comando, [idUsuario, idLivro, dataRetirada, dataEntrega, ativo]);
}

export async function ConsultarEmprestimos() {
    const comando =
        `
           
SELECT 	id_emprestimo             				id,
    tb_usuario.nm_usuario                	usuario,
    tb_livro.nm_livro                  		livro,
    tb_curso.nm_curso                       curso,
    tb_turma_curso.nm_turma           turma,
    dt_retirada               				data_de_retirada,
    dt_entrega                				data_para_entregar,
    bl_ativo                                ativo
        FROM tb_emprestimo
            INNER JOIN tb_usuario ON tb_usuario.id_usuario = tb_emprestimo.id_usuario
            INNER JOIN tb_livro   ON tb_livro.id_livro = tb_emprestimo.id_livro
            INNER JOIN tb_curso   ON tb_curso.id_curso = tb_usuario.id_curso
            INNER JOIN tb_turma_curso ON tb_turma_curso.id_turma_curso = tb_curso.id_curso;
        `
    const [linhas] = await con.query(comando)
    return linhas
} 