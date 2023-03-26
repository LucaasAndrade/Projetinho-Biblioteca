import './index.scss';

import ComponenteHeader from '../../components/header';
import LoadingBar from 'react-top-loading-bar';

import { useEffect, useRef, useState } from 'react';
import { ConsultarAutoresLivros } from '../../api/autores';
import { ConsultarTodosGeneros } from '../../api/genero';
import { CadastrarLivro, BuscarLivroPorId, AlterarInformacoesDoLivro } from '../../api/livro';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdicionarLivros() {
    const [autoresLivros, setAutoresLivros] = useState([]);
    const [generos, setGeneros] = useState([]);

    const [nomeLivro, setNomeLivro] = useState("");
    const [autorId, setAutorId] = useState();
    const [generoId, setGeneroId] = useState();
    const [observacoes, setObservacoes] = useState();
    
    const [nomeAutor, setNomeAutor] = useState();
    const [nomeGenero, setNomeGenero] = useState();

    const { id } = useParams();

    async function BuscarLivroId() {
        if (id === 0) {
            return;
        }
        else {
            const r = await BuscarLivroPorId(id);
            setAutorId(r.autor);
            setGeneroId(r.genero);
            setNomeLivro(r.livro);
            setObservacoes(r.observacoes);
            setNomeAutor(r.nome_autor);
            setNomeGenero(r.nome_genero);
        }
    }

    const navigate = useNavigate();
    const ref = useRef(null);
    // function navegarCadastroGenero() {
    //     navigate('/cadastro/genero');
    // }

    async function ConsultarAutores() {
        const r = await ConsultarAutoresLivros();
        setAutoresLivros(r)
    }
    
    async function ConsultarGeneros() {
        const r = await ConsultarTodosGeneros();
        setGeneros(r);
    }
    
    async function SalvarClick() {
        try {
            if (id === '0') {
                const r = await CadastrarLivro(autorId, generoId, nomeLivro, observacoes);
                toast.success('Livro Salvo ✔', {autoClose: 1000, delay: 0, pauseOnHover: false})
            }
            else {
                const r = await AlterarInformacoesDoLivro(autorId, generoId, nomeLivro, observacoes, id);
                toast.success('Livro Alterado ✔', {autoClose: 1000, delay: 0, pauseOnHover: false});
                //alert("Livro Alterado ✔");
            }
            ref.current.continuousStart();
            setTimeout(() => {
                navigate('/livros')
            }, 2000)
        } catch (err) {
            alert(err.request.response)   
        }
    }

    useEffect(() => {
        ConsultarGeneros();
        ConsultarAutores();
        BuscarLivroId();
    }, [])
    
    return(
        <main className='cadastrar-livros'>
            <LoadingBar color='#ff0000' ref={ref} />
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='titulo'>
                    <hr className='linha' />
                    <h2>Cadastro de Livros</h2>
                </div>
                <div className='fundo-cadastro'>


                <div className='info-inputs'>
                        <div>
                            <p>Título do Livro:</p>
                            <input className='inp-nome' type='text' value={nomeLivro} onChange={e => setNomeLivro(e.target.value)} />
                        </div>
                        <div className='col-um'>
                            <div>
                                <p>Nome do Autor:</p>
                                <input type='text' />
                            </div>

                            <div className='inp-um'>
                                <p>Gênero:</p>
                                <select onChange={e => setGeneroId(e.target.value)}>
                                    <option value={nomeGenero} selected disabled hidden>{!nomeGenero ? "Genero" : `${nomeGenero}`}</option>
                                    {generos.map(item => 
                                        <option  value={item.id}> {item.genero} </option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className='col-um'>
                            <div>
                                <p>Código ISBN:</p>
                                <input type='text' />
                            </div>
                            <div className='inp-um'>
                                <p>Editora:</p>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='text-inp'>
                            <div className="textarea">
                                <p>Observações:</p>
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='OBSERVAÇÕES DO LIVRO NÃO É OBRIGATÓRIO P/ CADASTRO' value={observacoes} onChange={e => setObservacoes(e.target.value)}></textarea>
                            </div>
                        </div>

                        <div className='div-botoes'>
                            <button><img src='/assets/images/conferebr.png' />Finalizar Cadastro</button>
                            <button onClick={() => navigate('/cadastro/genero')}><img src='/assets/images/maisbr.png' />Adicionar Gênero</button>
                        </div>
                        
                    </div>

                </div>
            </section>
        </main>
    )
}