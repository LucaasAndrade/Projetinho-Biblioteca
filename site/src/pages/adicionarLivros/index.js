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
            }, 1000)
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
        <main className='adicionar'>
            <LoadingBar color='#ff0000' ref={ref} />
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-adicionar'>
                <div className='fundo-adicionar'>
                    <div className='fundo-info'>
                        <p>Nome:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' value={nomeLivro} onChange={e => setNomeLivro(e.target.value)} />
                        <div className='col-dois'>
                            <div>
                                <p>Gênero:</p>
                                <select onChange={e => setGeneroId(e.target.value)}>
                                    <option value={nomeGenero} selected disabled hidden>{!nomeGenero ? "Genero" : `${nomeGenero}`}</option>
                                    {generos.map(item => 
                                        <option  value={item.id}> {item.genero} </option>
                                    )}
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Nome do Autor:</p>
                                <select onChange={e => setAutorId(e.target.value)}>
                                    <option value={nomeAutor} selected disabled hidden> {!nomeAutor ? "Autor" : `${nomeAutor}`}</option>
                                    {autoresLivros.map(item => 
                                        <option value={item.id}> {item.nome} </option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className='text-inp'>
                            <div className="textarea">
                                <p>Observações:</p>
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='OBSERVAÇÕES DO LIVRO NÃO É OBRIGATÓRIO P/ CADASTRO' value={observacoes} onChange={e => setObservacoes(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className='div-botoes'>
                            <button onClick={() => navigate('/cadastro/autor')}><img src='/assets/images/mais+.png' />Cadastrar Autores</button>
                            <button onClick={() => navigate('/cadastro/genero')}><img src='/assets/images/mais+.png' />Cadastrar Gêneros</button>
                            <button onClick={SalvarClick}><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}