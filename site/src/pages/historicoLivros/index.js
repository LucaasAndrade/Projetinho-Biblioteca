import './index.scss';

import ComponenteHeader from '../../components/header';

import { ConsultarTodosLivros, DeletarLivro } from '../../api/livro';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HistoricoLivros(props) {
    const [livros, setLivros] = useState([]);

    const navigate = useNavigate();

    async function DeletarClick(itemId, nomeItem){
        if (window.confirm(`Deseja deletar o livro ${nomeItem} ?`) == true) {
            await DeletarLivro(itemId);
            window.alert(`${nomeItem} deletado ✔`)
            setTimeout(() => {
                window.location.reload();
            }, 800)
        }
        else window.alert("Ação cancelada ❌")
    }

    async function ConsultarLivros() {
        const r = await ConsultarTodosLivros();
        setLivros(r);
    }

    useEffect(() => {
        ConsultarLivros();
    }, [])

    return(
        <main className='page-livros'>
            <ToastContainer />
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
                                    <td> {item.genero}</td>
                                    <td> {item.autor}</td>
                                    <td> {item.codigo} </td>
                                        <td>
                                            <span>
                                                <img src='/assets/images/editar.png' onClick={() => navigate(`/adicionar/livro/${item.id}`)}/>
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                <img src='/assets/images/lixeira.png' onClick={() => DeletarClick(item.id, item.livro)}/>
                                            </span>
                                        </td>
                                </tr>
                                )}        
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button onClick={() => navigate('/cadastro/autor')}><img src='/assets/images/mais+.png' />Cadastrar Autores</button>
                        <button onClick={() => navigate('/adicionar/livro/0')}><img src='/assets/images/mais+.png' />Adicionar Livros</button>
                    </div>
            </div>
        </div>

            </section>
        </main>
    )
}