/* eslint-disable react-hooks/exhaustive-deps */
import "./index.scss";

import ComponenteHeader from "../../components/header";
import LoadingBar from "react-top-loading-bar";

import { useEffect, useRef, useState } from "react";
import { ConsultarTodosGeneros } from "../../api/genero";
import {
  CadastrarLivro,
  BuscarLivroPorId,
  AlterarInformacoesDoLivro,
} from "../../api/livro";
import { ConsultarCores } from "../../api/cores";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdicionarLivros() {
  const [generos, setGeneros] = useState([]);
  const [cores, setCores] = useState([]);

  const [nomeLivro, setNomeLivro] = useState("");
  const [generoId, setGeneroId] = useState();
  const [observacoes, setObservacoes] = useState();
  const [nomeAutor, setNomeAutor] = useState();
  const [nomeGenero, setNomeGenero] = useState();
  const [codigoISBN, setCodigoISBN] = useState();
  const [editora, setEditora] = useState();
  const [prateleira, setNumeroPrateleira] = useState();
  const [nomeCor, setNomeCor] = useState();
  const [idCor, setIdCor] = useState();

  const [idSituacao, setIdSituacao] = useState();

  const { id } = useParams();

  const navigate = useNavigate();
  const ref = useRef(null);

  async function ConsultarGeneros() {
    const r = await ConsultarTodosGeneros();
    setGeneros(r);
  }

  async function ConsultarTodasCores() {
    const r = await ConsultarCores();
    setCores(r);
  }

  async function SalvarClick() {
    try {
      if (id === "0") {
        const r = await CadastrarLivro(
          generoId,
          idCor,
          idSituacao,
          prateleira,
          nomeLivro,
          nomeAutor,
          editora,
          observacoes,
          codigoISBN
        );
        toast.success("Livro Salvo ✔", {
          autoClose: 2000,
          delay: 0,
          pauseOnHover: false,
        });
      } else {
        const r = await AlterarInformacoesDoLivro(
          generoId,
          nomeLivro,
          observacoes,
          id
        );
        toast.success("Livro Alterado ✔", {
          autoClose: 1000,
          delay: 0,
          pauseOnHover: false,
        });
        //alert("Livro Alterado ✔");
      }
      ref.current.continuousStart();
      setTimeout(() => {
        navigate("/livros");
      }, 2000);
    } catch (err) {
      alert(err.request.response);
    }
  }

  useEffect(() => {
    BuscarLivroId();
    ConsultarGeneros();
    ConsultarTodasCores();
  }, []);

  async function BuscarLivroId() {
    if (Number(id) === 0) {
      return;
    } else {
      const r = await BuscarLivroPorId(id);
    // console.log(r.id_situacao);
    console.log(r);
    
      setGeneroId(r.id_genero);
      setNomeLivro(r.livro);
      setObservacoes(r.observacoes);
      setNomeAutor(r.autor);
      setCodigoISBN(r.isbn);
      setEditora(r.publicadora);
      setNumeroPrateleira(r.numeroPrateleira)
      setNomeGenero(r.genero);
      setIdCor(r.id_cor);
      setNomeCor(r.cor);
      setIdSituacao(r.id_situacao)
      console.log(idSituacao == 1);
      
    }
  }

  return (
    <main className="cadastrar-livros">
      <LoadingBar color="#ff0000" ref={ref} />
      <ToastContainer />
      <ComponenteHeader />
      <section className="info-cadastro">
        <div>
          <div className="titulo">
            <hr className="linha" />
            <h2>Cadastro de Livros</h2>
          </div>

          <div className="fundo-cadastro">
            <div className="info-inputs">
              <div>
                <p>Título do Livro:</p>
                <input
                  className="inp-nome"
                  type="text"
                  value={nomeLivro}
                  onChange={(e) => setNomeLivro(e.target.value)}
                />
              </div>
              <div className="col-um">
                <div>
                  <p>Nome do Autor:</p>
                  <input
                    type="text"
                    value={nomeAutor}
                    onChange={(e) => setNomeAutor(e.target.value)}
                  />
                </div>

                <div className="inp-um">
                  <p>Gênero:</p>
                  <select onChange={(e) => setGeneroId(e.target.value)}>
                    <option value={generoId} selected disabled hidden>
                      {!nomeGenero ? "Genero" : `${nomeGenero}`}
                    </option>
                    {generos.map((item) => (
                      <option value={item.id}> {item.genero} </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-um">
                <div>
                  <p>Código ISBN:</p>
                  <input
                    type="text"
                    value={codigoISBN}
                    onChange={(e) => setCodigoISBN(e.target.value)}
                  />
                </div>
                <div className="inp-um">
                  <p>Editora:</p>
                  <input
                    type="text"
                    value={editora}
                    onChange={(e) => setEditora(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-um">
                <div>
                  <p>Número da Prateleira: </p>
                  <input
                    type="text"
                    value={prateleira}
                    onChange={(e) => setNumeroPrateleira(e.target.value)}
                  ></input>
                </div>
                <div className="input-check">
                  <div>
                    <input
                      type="radio"
                      value={idSituacao}
                      name="Situacao"
                      onChange={(e) => setIdSituacao(e.target.value)}
                      {...idSituacao == 2 ? "checked" : ""}
                    />
                    <p> Disponível </p>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value={idSituacao}
                      name="Situacao"
                      onChange={(e) => setIdSituacao(e.target.value)}
                      {...idSituacao == 1 ? "checked" : ""}
                    />
                    <p> Emprestado </p>
                  </div>
                </div>
              </div>
              <div className="col-um">
                <div>
                  <p> Sistema de Cores</p>
                  <select onChange={(e) => setIdCor(e.target.value)}>
                    <option value={nomeCor} selected disabled hidden>
                      {" "}
                      {!nomeCor ? "Cor" : `${nomeCor}`}{" "}
                    </option>
                    {cores.map((item) => (
                      <option value={item.id}> {item.cor} </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-inp">
                <div className="textarea">
                  <p>Observações:</p>
                  <textarea
                    className="descricao"
                    name="story"
                    rows="7"
                    cols="46"
                    placeholder="OBSERVAÇÕES DO LIVRO NÃO É OBRIGATÓRIO P/ CADASTRO"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="div-botoes">
                <button onClick={SalvarClick}>
                  <img src="/assets/images/conferebr.png" />
                  Finalizar Cadastro
                </button>
                <button onClick={() => navigate("/cadastro/genero/0")}>
                  <img src="/assets/images/maisbr.png" /> Gerenciar Gêneros
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
