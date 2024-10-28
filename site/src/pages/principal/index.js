import './index.scss'

import ComponenteHeader from '../../components/header'
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { EmprestimosAtivos } from '../../api/emprestimos';

export default function Principal() {
    const [emprestimos, setEmprestimos] = useState({total: 0, late: 0, today: 0});
    
    const navigate = useNavigate();

    const CarregarEmprestimos = async () => {
        const response = await EmprestimosAtivos();

        const recoveryBookToday = response.reduce((acc, val) => val.data_entrega == new Date().toISOString() ? acc + 1 : acc, 0);
        const lateBooks = response.reduce((acc, val) => val.data_entrega < new Date().toISOString() ? acc + 1 : acc, 0);
        
        setEmprestimos({total: response.length, late: lateBooks, today: recoveryBookToday});
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
                        <div className='fila-um'>
                            <div className='div-livro'>
                                <p>Livros emprestados: <span>{ emprestimos.total ?? 0}</span></p>
                            </div>
                            <div className='div-livro'>
                                <p>Livros para recolher hoje: <span>{ emprestimos.today ?? 0}</span></p>
                            </div>
                        </div>
                            <div className='div-livro-dois'>
                                <p>Livros atrasados: <span className='spn-atrasado'>{ emprestimos.late ?? 0}</span></p>
                            </div>
                    </div>
                </div>
            </section>
        </main>
    )
}