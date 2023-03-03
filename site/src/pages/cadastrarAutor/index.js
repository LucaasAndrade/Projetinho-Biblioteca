import './index.scss';

import ComponenteHeader from '../../components/header';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ConsultarTodosPaisesFds } from '../../api/paises';
import { CadastrarAutorLivro } from '../../api/autores';


export default function CadastrarAutor() {
    const [paisId, setPaisId] = useState();
    const [nomeAutor, setNomeAutor] = useState();
    const [paises, setPaises] = useState([]);

    const ref = useRef();
    const navigate = useNavigate();

    async function SalvarClick() {
        try {
            const r = await CadastrarAutorLivro(nomeAutor, paisId);
            
            toast.success('Autor Cadastrado com sucesso ✔', {autoClose: 2000, delay: 0, pauseOnHover: false})
            
            ref.current.continuousStart();
            
            setTimeout(() => {
                navigate('/adicionar/livro/0')
            }, 3000)
        }
        catch (err) {
            window.alert(err.request.response.data.error)
        }
    }

    async function BuscarPaises() {
        const r = await ConsultarTodosPaisesFds();
        setPaises(r);
    }

    useState(() => {
        BuscarPaises();
    }, [])

    return(
        <main className='page-cadastro-autor'>
            <LoadingBar color='#ff0000' ref={ref} />    
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='fundo-cadastrar'>
                    <div className='fundo-info'>
                        <p>Nome:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' value={nomeAutor} onChange={e => setNomeAutor(e.target.value)} />
                        
                        <div className='text-inp'>
                            <div className='col-dois'>
                                <div>
                                    <p>Nacionalidade:</p>
                                    <select onChange={e => setPaisId(e.target.value)}>
                                        <option value="" selected disabled hidden>Selecione</option>
                                        {paises.map(item =>
                                            <option value={item.id}> {item.nacionalidade}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='div-botoes'>
                            <button onClick={SalvarClick}><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}