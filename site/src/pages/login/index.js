import './index.scss'

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import { LoginAdm } from '../../api/login.js';

import storage from 'local-storage';    

export default function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [resp, setResp] = useState("");
    
    const navigate = useNavigate('');

    const ref = useRef(null);

    useEffect(() => {
        if (storage('usuario-logado')) navigate('/home');
    }, [])

    async function loginClick() {
        try {
            const resposta = await LoginAdm(email, senha);
            storage('usuario-logado', resposta)
            ref.current.continuousStart();   
            setTimeout(() => {
                navigate('/home')
            }, 3000)
        } catch {
            ref.current.continuousStart();       
            setTimeout(() => {
                setResp('Login ou Senha inválidos!');
                ref.current.complete();       
            }, 1500)
        }
    }


    return (
        <main className="pagina-login">
            <LoadingBar color='#ff0000' ref={ref} />
            <div className='alinhamento'>
                <div className='fundo-imagem'>
                    <img src='/assets/images/logo.png' />
                </div>
                <div className='fundo-login'>
                    <div className='info-login'>
                        <p className='titulo'>biblioteca - insf</p>
                        <div className='inputs'>
                            <p className='p-login'>login:</p>
                            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                            <p className='p-login'>senha:</p>
                            <input type='password' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <button className='botao' onClick={loginClick}>login</button>
                        <span className='erro'>{ resp }</span>
                    </div>
                </div> 
            </div>
        </main>
    )
};