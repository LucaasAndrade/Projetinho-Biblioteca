import { con } from './connection.js'

export async function CadastrarAutores(nome, nascionalidade) {
    const comando =
        `
    INSERT INTO tb_autor(nm_autor, id_nascionalidade)
        VALUES (?, ?);
        `
    const [resposta] = await con.query(comando, [nome, nascionalidade]);    
}


export async function ConsultarAutores(nome) {
    const comando = 
        `
        SELECT  id_autor			id,
		nm_autor			nome,
        nm_nascionalidade   nascionalidade
	FROM tb_autor
    INNER JOIN tb_nascionalidade ON tb_autor.id_nascionalidade = tb_nascionalidade.id_nascionalidade
		WHERE nm_autor like ?
        `
    const [linhas] = await con.query(comando, [`%${nome}%`])
    return linhas;
}
