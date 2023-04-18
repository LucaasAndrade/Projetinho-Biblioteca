import "./index.scss";

import ComponenteHeader from "../../components/header";
import LoadingBar from "react-top-loading-bar";

import { useEffect, useRef, useState } from "react";
import {
  AlterarGenero,
  CadastrarGeneroDB,
  ConsultarGeneroPorId,
  ConsultarTodosGeneros,
  DeletarGeneroBD,
} from "../../api/genero";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CadastrarGenero() {
  const [nmGenero, setNmGenero] = useState("");
  const [generos, setGeneros] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();
  const ref = useRef(null);

  async function BuscarGeneroId(id) {
    if (Number(id) === 0) return;
    else {
      const r = await ConsultarGeneroPorId(id);
      setNmGenero(r[0].genero);
    }
  }

  async function SalvarClick() {
    try {
      if (Number(id) === 0) {
        const r = await CadastrarGeneroDB(nmGenero);
        toast.success("Genero cadastrado com Sucesso ✔", {
          autoClose: 2000,
          delay: 0,
          pauseOnHover: false,
        });
      } else {
        const r = await AlterarGenero(nmGenero, id);
        toast.success("Genero alterado com Sucesso ✔", {
          autoClose: 2000,
          delay: 0,
          pauseOnHover: false,
        });
      }
      ref.current.continuousStart();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      alert(err.request.response);
    }
  }

  async function ConsutarGeneros() {
    const r = await ConsultarTodosGeneros();
    setGeneros(r);
  }

  async function DeletarGenero(id, nome) {
    alert(`ATENÇÃO! ⚠
        UMA VEZ DELETADO O GÊNERO, NÃO É POSSÍVEL RECUPERA-LO!`);

    if (window.confirm(`Deseja mesmo deletar o gênero ${nome} ?`) == true) {
      const r = await DeletarGeneroBD(id);
      toast.success("Genero deletado com sucesso ✔", {
        autoClose: 2000,
        delay: 0,
        pauseOnHover: false,
      });
    } else {
      toast.error("Ação Cancelada! ❌", {
        autoClose: 2000,
        delay: 0,
        pauseOnHover: false,
      });
    }

    ref.current.continuousStart();
    setTimeout(() => {
      window.location.reload();
    }, 1800);
  }

  function AtualizarPagina(nome, id) {
    setNmGenero(nome);
    navigate(`/cadastro/genero/${id}`);
  }

  useEffect(() => {
    BuscarGeneroId(id);
    ConsutarGeneros();
  }, []);

  return (
    <main className="page-cadastro-genero">
      <LoadingBar color="#ff0000" ref={ref} />
      <ToastContainer />
      <ComponenteHeader />

      <section className="info-cadastro">
        <div className="pagina-genero">
          <div className="titulo">
            <hr className="linha" />
            <h2> Gerenciar Gêneros </h2>
          </div>
          <div className="div-pesquisa">
            <p>Gênero:</p>
            <div className="divBusca">
                <input
                className="txtBusca"
                type="text"
                placeholder="Novo Gênero"
                value={nmGenero}
                onChange={(e) => setNmGenero(e.target.value)}
                />
            </div>
            <div>
                <button className="botao-consulta" onClick={SalvarClick}>
                  <img src="/assets/images/conferebr.png" />
                  Salvar
                </button>
              </div>
          </div>

          <div className="fundo-cadastrar">
            
          </div>
          <div className="tabela">
            <table>
              <thead>
                <tr>
                  <th> Nome Genero </th>
                  <th> Livros com esse Genero </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {generos.map((item) => (
                <tbody>
                  <tr>
                    <td> {item.genero} </td>
                    <td> {item.id} </td>
                    <td>
                      <span>
                        <img
                          src="/assets/images/editar.png"
                          onClick={() => AtualizarPagina(item.genero, item.id)}
                        />
                      </span>
                    </td>
                    <td>
                      <span>
                        <img
                          src="/assets/images/lixeira.png"
                          onClick={() => DeletarGenero(item.id, item.genero)}
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
