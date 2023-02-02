import { con } from './connection.js'


export async function CadastrarNascionalidade(nascionalidade) {
    const comando = 
        `
        INSERT INTO tb_nascionalidade(nm_nascionalidade)
            VALUES(?);
        `
    const resposta = await con.query(comando, [nascionalidade])
}


export async function ConsultarNacionalidades(nascionalidade) {
    const comando =
        `
        SELECT  id_nascionalidade      id,
                nm_nascionalidade     nacionalidade
            FROM tb_nascionalidade
                WHERE nm_nascionalidade LIKE ?
            ORDER BY nm_nascionalidade;
        `
    const [linhas] = await con.query(comando, [`%${nascionalidade}%`]);
    return linhas;
}