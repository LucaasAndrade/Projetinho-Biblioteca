

export function VerificarCamposEmprestimo(idUsuario, idLivro, dataDeRetirada, dataDeEntrega) {
    if (!idUsuario) throw new Error("Informe um codigo de Usuario");
    else if (!idLivro) throw new Error("Informe o codigo do Livro");
    else if (!dataDeRetirada) throw new Error("Informe uma data de Retirada");
    else if (!dataDeEntrega) throw new Error("Informe uma data para Entrega");
}