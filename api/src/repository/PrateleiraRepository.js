import { con } from "./connection.js";

export async function ConsultarPrateleiras() {
    const comando =
        `
    SELECT 	id_prateleira	id,
		nr_prateleira	numero_prateleira,
        ds_observacoes	observaoces
	FROM tb_prateleira;
        `
    const [linhas] = await con.query(comando);
}

export async function CadastrarPrateleira(nomePrateleira, observaoces) {
    const comando =
        `
        INSERT INTO tb_prateleira(nr_prateleira, ds_observações)
            VALUES(?, ?)
        `
    const resposta = await con.query(comando, [nomePrateleira, observaoces]);
}

export async function AlterarPrateleira(idPrateleira, nomePrateleira, observaoces) {
    const comando = 
        `
    UPDATE tb_prateleira
        SET nr_prateleira   = ?,
            ds_observacoes  = ?
        WHERE id_prateleira = ?;
        `
    const resposta = await con.query(comando, [idPrateleira, nomePrateleira, observaoces]);
}

export async function DeletarPrateleira(idPrateleira) {
    const comando =
        `
        DELETE FROM tb_prateleira
            WHERE id_prateleira = ?
        `
    const resposta = await con.query(comando, idPrateleira);
}