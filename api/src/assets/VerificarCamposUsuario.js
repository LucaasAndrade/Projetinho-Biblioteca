


export function VerificarCamposUsuario(idCurso, idTurma, nome, numero, cpf) {
    if (!idCurso) throw new Error("Informe um Curso!");
    else if (!idTurma) throw new Error("informe a TURMA do aluno!");
    else if (!nome) throw new Error("Informe o NOME do aluno!");
    else if (!numero) throw new Error("Obrigatório o NÚMERO pra contato!");
    else if (!cpf) throw new Error("Cpf do usuário é obrigatório!");
}