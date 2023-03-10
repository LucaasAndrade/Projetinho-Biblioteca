


export  function VerificarCampos(genero, cor, situacao, prateleira, nome, autor, publicadora, isbn) {
    if (!genero) throw new Error("Nome do Autor Obrigatório!");
    else if (!cor) throw new Error("Gênero Obrigatório! BAKA!");
    else if (!prateleira) throw new Error("Informe em qual prateleira o livro está");
    else if (!nome) throw new Error("Nome do Livro Obrigatório!");
    else if (!autor) throw new Error("Informe o nome do autor do livro!");
    else if (!publicadora) throw new Error("Informe o nome da publicadora do livro");
    else if (!isbn) throw new Error("Informe o codigo ISBN do livro! Caso não ache, procure no google :)");
}