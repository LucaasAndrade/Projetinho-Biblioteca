import './index.scss';

import ComponenteHeader from '../../components/header';
import LoadingBar from 'react-top-loading-bar';

import { useRef, useState } from 'react';
import { CadastrarGeneroNoBancoDeDados } from '../../api/genero';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CadastrarGenero() {
    const [nmGenero, setNmGenero] = useState();

    const navigate = useNavigate();
    const ref = useRef(null);

    async function SalvarClick() {
        try {
            const r = await CadastrarGeneroNoBancoDeDados(nmGenero);
            toast.success('Genero cadastrado com Sucesso ✔', {autoClose: 2000, delay: 0, pauseOnHover: false});
            ref.current.continuousStart();   
            setTimeout(() => {
                navigate('/adicionar/livro/0')
            }, 3000)
        } catch (err) {
            alert(err.request.response)
        }
    }

    return(
        <main className='page-cadastro-genero'>
            <LoadingBar color='#ff0000' ref={ref} />
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='fundo-cadastrar'>
                    <div>
                        <p>Gênero:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' value={nmGenero} onChange={e => setNmGenero(e.target.value) } />
                        
                        <div className='div-botoes'>
                            <button onClick={SalvarClick}><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}