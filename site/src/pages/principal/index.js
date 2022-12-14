import './index.scss'

import ComponenteHeader from '../../components/header'
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { EmprestimosAtivos } from '../../api/emprestimos';

export default function Principal() {
    const [a, setA] = useState();
    
    const navigate = useNavigate();

    async function CarregarEmprestimos() {
        const a = await EmprestimosAtivos();
        setA(a.Emprestimos_Ativos);
    }
    
    useEffect(() => {
        CarregarEmprestimos();
        if (!storage('usuario-logado')) navigate('/');
    }, []); 
    

    return (
        <main className='principal'>
            <ComponenteHeader />
            <section className='info-principal'>
                <div className='fundo'>
                    <div className='mensagem'>
                        <p>Olá <span>@Admin</span>, atualmente temos:</p>
                    </div>
                    <div className='fundo-livros'>
                        <div>
                            <div className='div-livro'>
                                <p>Livros emprestados: <span>{a}</span></p>
                            </div>
                            <div className='div-livro'>
                                <p>Livros atrasados: <span className='spn-atrasado'>0</span></p>
                            </div>
                        </div>
                        <div className='div-livro'>
                            <p>Livros para recolher hoje: <span>0</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}