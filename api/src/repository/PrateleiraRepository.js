import { con } from "./connection.js";

export async function ConsultarPrateleiras() {
  const comando = `
    SELECT 	id_prateleira	id,
		nr_prateleira	numero_prateleira
	FROM tb_prateleira;
        `;
  const [linhas] = await con.query(comando);
  return linhas;
}

export async function CadastrarPrateleira(nomePrateleira) {
  const comando = `
        INSERT INTO tb_prateleira(nr_prateleira)
            VALUES(?)
        `;
  const resposta = await con.query(comando, [nomePrateleira]);
}

export async function AlterarPrateleira(
  idPrateleira,
  nomePrateleira,
  observaoces
) {
  const comando = `
    UPDATE tb_prateleira
        SET nr_prateleira   = ?,
            ds_observacoes  = ?
        WHERE id_prateleira = ?;
        `;
  const resposta = await con.query(comando, [
    idPrateleira,
    nomePrateleira,
    observaoces,
  ]);
}

export async function DeletarPrateleira(idPrateleira) {
  const comando = `
        DELETE FROM tb_prateleira
            WHERE id_prateleira = ?
        `;
  const resposta = await con.query(comando, idPrateleira);
}
