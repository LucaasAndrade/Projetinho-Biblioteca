import './index.scss';

import ComponenteHeader from '../../components/header';

import { ConsultarTodosLivros } from '../../api/livro';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HistoricoLivros(props) {
    const [livros, setLivros] = useState([]);

    const navigate = useNavigate();

    async function ConsultarLivros() {
        const r = await ConsultarTodosLivros();
        setLivros(r);
    }

    useEffect(() => {
        ConsultarLivros();
    }, [])

    return(
        <main className='page-livros'>
            <ComponenteHeader />
            <section className='info-livros'>
               

            <div className='pagina-livros'>
            <h1> Lista de Livros: </h1>

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Livro</th>
                            <th>Gênero</th>
                            <th>Autor</th>
                            <th>Código</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                            <tbody>
                                {livros.map(item =>
                                    <tr>
                                    <td> {item.id} </td>
                                    <td> {item.livro}</td>
                                    <td> {item.autor}</td>
                                    <td> {item.genero}</td>
                                    <td> {item.codigo} </td>
                                    <td><span><img src='/assets/images/editar.png' /></span></td>
                                    <td><span><img src='/assets/images/lixeira.png' /></span></td>
                                </tr>
                                )}        
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button onClick={() => navigate('/cadastro/autor')}><img src='/assets/images/mais+.png' />Cadastrar Autores</button>
                        <button onClick={() => navigate('/adicionar/livro')}><img src='/assets/images/mais+.png' />Adicionar Livros</button>
                    </div>
            </div>
        </div>

            </section>
        </main>
    )
}