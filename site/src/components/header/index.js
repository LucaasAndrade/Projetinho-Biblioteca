import './index.scss'

import { useNavigate } from 'react-router-dom';


export default function ComponenteHeader() {

    const navigate = useNavigate('');

    return (
        <header className='componente-header'>
            <div className='opcoes'>
                <div className='opcao' onClick={() => navigate('/home')}>
                    <img src='/assets/images/mum.png' />
                    <p>Tela Principal</p>
                </div>
                <div className='opcao'  onClick={() => navigate('/cadastro/livro/0')}>
                    <img src='/assets/images/mdois.png' />
                    <p>Adicionar Livros</p>
                </div>
                <div className='opcao' onClick={() => navigate('/cadastro/leitor/0')}>
                    <img src='/assets/images/mtres.png' />
                    <p>Cadastrar Leitor</p>
                </div>
                <div className='opcao' onClick={() => navigate('/emprestimo')}>
                    <img src='/assets/images/mquatro.png' />
                    <p>Realizar Empréstimos</p>
                </div>
                <div className='opcao-dois' onClick={() => navigate('/historico/emprestimos')}>
                    <img src='/assets/images/mcinco.png' />
                    <p>Consultar Empréstimos</p>
                </div>
                <div className='opcao-dois' onClick={() => navigate('/leitores')}>
                    <img src='/assets/images/mseis.png' />
                    <p>Consultar Leitores</p>
                </div>
                <div className='opcao-dois' onClick={() => navigate('/livros')}>
                    <img src='/assets/images/moito.png' />
                    <p>Consultar Livros</p>
                </div>
                <div className='opcao-dois' onClick={() => navigate('/emprestimo')}>
                    <img src='/assets/images/msete.png' />
                    <p>Consultar Cursos/Turmas</p>
                </div>
            </div>
                <div className='opcao-dois' onClick={() => navigate('/emprestimo')}>
                <img src='/assets/images/sair.png' />
                <p>Sair</p>
            </div>
        </header>
    )
}