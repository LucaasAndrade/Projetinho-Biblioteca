import "./index.scss";

import ComponenteHeader from "../../components/header";

import { ConsultarTodosLivros, DeletarLivro } from "../../api/livro";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HistoricoLivros(props) {
  const [livros, setLivros] = useState([]);

  const navigate = useNavigate();

  async function DeletarClick(itemId, nomeItem) {
    if (window.confirm(`Deseja deletar o livro ${nomeItem} ?`) === true) {
      await DeletarLivro(itemId);
      window.alert(`${nomeItem} deletado ✔`);
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } else window.alert("Ação cancelada ❌");
  }

  async function ConsultarLivros() {
    const r = await ConsultarTodosLivros();
    setLivros(r);
  }

  useEffect(() => {
    ConsultarLivros();
  }, []);

  return (
    <main className="page-livros">
      <ToastContainer />
      <ComponenteHeader />
      <section className="info-livros">
        <div className="pagina-livros">
          <div className="titulo">
            <hr className="linha" />
            <h2> Lista de Livros </h2>
          </div>
          <div className="div-pesquisa">
            <div className="divBusca">
              <input
                type="text"
                className="txtBusca"
                placeholder="Buscar leitor"
              />
              <img
                src="/assets/images/lupa.png"
                className="btnBusca"
                alt="Buscar"
              />
            </div>
            <div>
              <button className="botao-consulta">Consultar Gêneros</button>
            </div>
          </div>
          <div className="tabela">
            <table>
              <thead>
                <tr>
                  <th>título</th>
                  <th>autor</th>
                  <th>editora</th>
                  <th>gênero</th>
                  <th>Código ISBN</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {livros.map((item) => (
                  <tr>
                    <td> {item.id} </td>
                    <td> {item.livro}</td>
                    <td> {item.autor}</td>
                    <td> {item.genero}</td>
                    <td> {item.isbn} </td>
                    <td>
                      <span>
                        <img
                          src="/assets/images/editar.png"
                          onClick={() => navigate(`/cadastro/livro/${item.id}`)}
                        />
                      </span>
                    </td>
                    <td>
                      <span>
                        <img
                          src="/assets/images/lixeira.png"
                          onClick={() => DeletarClick(item.id, item.livro)}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="div-botoes">
              <button onClick={() => navigate("/cadastro/livro/0")}>
                <img src="/assets/images/maisbr.png" />
                Adicionar Livro
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
