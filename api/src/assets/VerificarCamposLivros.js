


export  function VerificarCampos(autor, genero, livro) {
    if (!autor) throw new Error("Nome do Autor Obrigatório!");
    else if (!genero) throw new Error("Gênero Obrigatório! BAKA!");
    else if (!livro) throw new Error("Nome do Livro Obrigatório!");
}