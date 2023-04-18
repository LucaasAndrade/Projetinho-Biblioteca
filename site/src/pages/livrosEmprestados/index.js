import "./index.scss";

import ComponenteHeader from "../../components/header";

import { ConsultarTodosEmprestimos } from "../../api/emprestimos";
import { useEffect, useState } from "react";
import { InverterDatas } from "../../assets/InverterData";

export default function LivrosEmprestados() {
  const [emprestimos, setEmprestimos] = useState([]);

  async function Consultar() {
    const r = await ConsultarTodosEmprestimos();
    setEmprestimos(r);
  }

  useEffect(() => {
    Consultar();
  }, []);

  return (
    <main className="page-livros-emprestados">
      <ComponenteHeader />
      <section className="info-livros-emprestados">
        <div className="pagina-livros-emprestados">
            <div className='titulo'>
                <hr className='linha' />
                <h2> Livros Empretados </h2>
            </div>
          <div className="tabela">
            <table>
              <thead>
                <tr>
                  <th>nome</th>
                  <th>curso</th>
                  <th>turma</th>
                  <th>livro emprestado</th>
                  <th>retirado</th>
                  <th>devolucao</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {emprestimos.map((item) => (
                  <tr>
                    <td> {item.usuario} </td>
                    <td> {item.curso} </td>
                    <td> {item.turma} </td>
                    <td> {item.livro} </td>
                    <td> {InverterDatas(item.data_de_retirada)} </td>
                    <td> {InverterDatas(item.data_para_entregar)} </td>

                    <td>
                      <span>
                        <img
                          src="/assets/images/lixeira.png"
                        />
                      </span>
                    </td>
                  </tr>
                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
