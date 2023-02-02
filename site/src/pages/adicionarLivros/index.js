import './index.scss';

import ComponenteHeader from '../../components/header';
import { useEffect, useState } from 'react';
import { ConsultarAutoresLivros } from '../../api/autores';
import { ConsultarTodosGeneros } from '../../api/genero';
import { CadastrarLivro } from '../../api/livro';
import { useNavigate } from 'react-router-dom';

export default function AdicionarLivros() {
    const [autoresLivros, setAutoresLivros] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [nomeLivro, setNomeLivro] = useState("");
    const [autorId, setAutorId] = useState();
    const [generoId, setGeneroId] = useState();
    const [observacoes, setObservacoes] = useState();
    
    const navigate = useNavigate();

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
            const r = await CadastrarLivro(autorId, generoId, nomeLivro, observacoes);
            alert('Livro Salvo ✔')
        } catch (err) {

            alert(err.request.response)   
        }
    }

    useEffect(() => {
        ConsultarGeneros();
        ConsultarAutores();
    }, [])
    
    return(
        <main className='adicionar'>
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
                                    <option value="" selected disabled hidden>Gênero</option>
                                    {generos.map(item => 
                                        <option  value={item.id}> {item.genero} </option>
                                    )}
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Nome do Autor:</p>
                                <select onChange={e => setAutorId(e.target.value)}>
                                    <option value="" selected disabled hidden>Autores</option>
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