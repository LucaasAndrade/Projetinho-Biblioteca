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