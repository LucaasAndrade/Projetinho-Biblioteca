import './index.scss';

import ComponenteHeader from '../../components/header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ConsultarLeitores } from '../../api/leitor';
import { DeletarLeitor } from '../../api/leitor';

import LoadingBar from 'react-top-loading-bar';

export default function HistoricoLeitores() {
    const [leitores, setLeitores] = useState([]);

    const ref = useRef(null)

    async function ConsultarTodosLeitores() {
        const r = await ConsultarLeitores();
        setLeitores(r);
    }

    async function DeletarClick(itemId, nomeItem) {
        if (window.confirm(`Deseja mesmo deletar o Usuario ${nomeItem} ?`) == true) {
            await DeletarLeitor(itemId);

            window.alert(`${nomeItem} deletado ✔`);

            ref.current.continuousStart();
            
            setTimeout(() => {
                window.location.reload();
            }, 800)
        } else {
            window.alert("Ação cancelada ❌")
        }
    }

    useEffect(() => {
        ConsultarTodosLeitores();
    }, [])

    const navigate = useNavigate();

    return(
        <main className='page-leitores'>
            <LoadingBar color='#ff0000' ref={ref} />
            <ComponenteHeader />
            <section className='info-leitores'>
               

            <div className='pagina-leitores'>
            <h1> Lista de Leitores: </h1>

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Leitor</th>
                            <th>Curso</th>
                            <th>Turma</th>
                            <th>Livros Lidos</th>
                            <th>Livros Atrasados</th>
                            <th>Código</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {leitores.map(item =>
                        <tr>
                            <td> {item.id}</td>
                            <td> {item.leitor }</td>
                            <td> {item.curso}</td>
                            <td> {item.turma}</td>
                            <td> {item.livros_lidos}</td>
                            <td> {item.livros_atrasados} </td>
                            <td> {item.codigo} </td>
                                <td>
                                    <span>
                                        <img src='/assets/images/editar.png' onClick={() => navigate(`/cadastro/leitor/${item.id}`)}/>
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <img src='/assets/images/lixeira.png' onClick={() => DeletarClick(item.id, item.leitor)}/>
                                    </span>
                                </td>
                        </tr>    
                            )}    
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button onClick={() => navigate('/cadastro/leitor/0')}><img src='/assets/images/mais+.png' />Adicionar Leitor</button>
                    </div>
                </div>
            </div>

            </section>
        </main>
    )
}