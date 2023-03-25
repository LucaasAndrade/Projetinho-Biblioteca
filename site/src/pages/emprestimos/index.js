import './index.scss';

import ComponenteHeader from '../../components/header';
import LoadingBar from 'react-top-loading-bar';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {  ConsultarLeitorPorCodigo } from '../../api/leitor';
import { ConsultarLivroPorCodigo } from '../../api/livro';
import { BuscarData } from '../../api/data';
import { CadastrarNovoEmprestimo } from '../../api/emprestimos';
import { InverterDatas } from '../../assets/InverterData';

export default function NovoEmprestimo() {
    const [idUsuario, setIdUsuario] = useState();
    const [nomeUsuario, setNomeUsuario] = useState();
    const [nomeCurso, setNomeCurso] = useState();
    const [nomeTurma, setNomeTurma] = useState();
    const [telefone, setTelefone] = useState();
    
    const [idLivro, setIdLivro] = useState();
    const [nomeAutor, setNomeAutor] = useState();
    const [nomeGenero, setNomeGenero] = useState();
    const [nomeLivro, setNomeLivro] = useState()

    const [codigoLeitor, setCodigoLeitor] = useState('');
    const [codigoLivro, setCodigoLivro] = useState('');
    const [dataRetirada, setDataRetirada] = useState();
    const [dataDeEntrega, setDataDeEntrega] = useState();

    const navigate = useNavigate();
    const ref = useRef(null);

    async function ConsultarUsuario() {
        try {
            if(!codigoLeitor) throw new Error("Informe um Código de Identificação de Leitor!")

            const r = await ConsultarLeitorPorCodigo(codigoLeitor);

            setIdUsuario(r.id_usuario)
            setNomeUsuario(r.nm_usuario);
            setNomeCurso(r.nm_curso);
            setNomeTurma(r.nm_turma);
            setTelefone(r.nr_telefone);
        } catch (err) {
            window.alert(err.message)
        }
        
    }

    async function ConsultarLivro() {
        try {
            if (!codigoLivro) throw new Error("Não tem como consultar com o campo vazio!")
            
            const r = await ConsultarLivroPorCodigo(codigoLivro);
            
            setIdLivro(r.id_livro);
            setNomeAutor(r.nm_autor);
            setNomeGenero(r.nm_genero);
            setNomeLivro(r.nm_livro)
        } catch (err) {
            window.alert(err.message)
       }
    }

    async function SalvarClick() {
        try {
            if (!codigoLivro) throw new Error("Informe o Codigo do Livro!");
            if (!codigoLeitor) throw new Error("Informe o Codigo de Identificação do Leitor!");

            const r = await CadastrarNovoEmprestimo(idUsuario, idLivro, dataRetirada, dataDeEntrega);

            window.alert(`Emprestimo realizado com Sucesso! ✔ 
            A devolução terá de ser feita no dia ${InverterDatas(dataDeEntrega)}.`);
            ref.current.continuousStart();
            setTimeout(() => {
                navigate('/historico/emprestimos')
            }, 800)
        } catch (err) {
            window.alert(err.message)
        }
    }

    async function DataAtual() {
        const r = await BuscarData();
        setDataRetirada(r[0]);
        setDataDeEntrega(r[1]);
    }

    useEffect(() => {
        DataAtual();
    }, [])

    return(
        <main className='novo-emprestimo'>
            <LoadingBar color='#ff0000' ref={ref} />
            <ComponenteHeader />
            <section className='info-novo-emprestimo'>
                <div className='fundo-novo-emprestimo'>
                    <div>
                        <p className='col-dois'>Nome:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' value={nomeUsuario} disabled={true} />
                        <div className='col-dois'>
                            <div>
                                <p>CPF:</p>
                                <input type='text' placeholder='Exemplo' value={codigoLeitor} onChange={e => setCodigoLeitor(e.target.value)} />
                                <button onClick={ConsultarUsuario}> Pesquisar</button>
                            </div>
                            <div className='div-col-dois'>
                                <p>Telefone p/ contato:</p>
                                <input type='tell' placeholder='(xx) xxxxx-xxxx' value={telefone} disabled={true}/>
                            </div>
                        </div>
                        
                        <div className='col-dois'>
                            <div>
                                <p>Curso:</p>
                                <select disabled={true}>
                                    <option value={nomeCurso}> {!nomeCurso ? "Curso" : `${nomeCurso}`}</option>
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Turma:</p>
                                <select disabled={true}>
                                    <option value={nomeTurma}> {!nomeTurma ? "Turma" : `${nomeTurma}`} </option>
                                </select>
                            </div>
                        </div>
                        <div className='div-data'>
                            <div>
                                <p>Retirada:</p>
                                <input type='date' value={dataRetirada}/>
                            </div>
                            <div className='data'>
                                <p>Devolução:</p>
                                <input type='date' value={dataDeEntrega} onChange={e => setDataDeEntrega(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <hr className='linha' />

                    <div>
                        <div className='col-dois'>
                            <div>
                                <p>Código ISBN:</p>
                                <input type='text' placeholder='A1BC5' value={codigoLivro} onChange={e => setCodigoLivro(e.target.value)} />
                            <button onClick={ConsultarLivro}> Pesquisar</button>
                            </div>
                            <div className='div-col-dois'>
                                <p>Gênero:</p>
                                <select disabled={true}>
                                    <option value={nomeGenero}> {!nomeGenero ? "Genero" : `${nomeGenero}`}</option>
                                </select>
                            </div>
                        </div>

                        <p className='col-dois'>Nome do Livro:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' value={nomeLivro} disabled={true} />
                        <p className='col-dois'>Nome do Autor:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' />

                        <button><img src='/assets/images/confere.png' />salvar</button>

                    </div>

                </div>
            </section>
        </main>
    )
}