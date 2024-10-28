import './index.scss';

import ComponenteHeader from '../../components/header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ConsultarLeitores } from '../../api/leitor';
import { DeletarLeitor } from '../../api/leitor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

export default function HistoricoLeitores() {
    const [leitores, setLeitores] = useState([]);
    const [ searchList, setSearchList ] = useState([]);

    const ref = useRef(null)

    async function ConsultarTodosLeitores() {
        const r = await ConsultarLeitores();
        setLeitores(r);
        setSearchList(r);
    }

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        
        if(!value) {
            setSearchList(leitores);
            return
        }

        const newArr = new Array(leitores).filter(item => {
            console.log(item);
            return item.leitor.toLowerCase().includes(value)
        });
        setSearchList(newArr); 
        console.log(newArr);
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
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-leitores'>
            
            <div>
                <div className='titulo'>
                    <hr className='linha' />
                    <h2>Lista de Leitores</h2>
                </div>
                <div className='div-pesquisa'>
                    <div className='divBusca'>
                        <input onChange={handleSearch} type='text' className='txtBusca' placeholder='Buscar leitor'/>
                        <img src='/assets/images/lupa.png' className='btnBusca' alt='Buscar' />
                    </div>
                </div>
                <div className='tabela'>
                    <table>
                        <thead>
                            <tr>
                                <th>nome</th>
                                <th>curso</th>
                                <th>turma</th>
                                <th>livros atrasados</th>
                                <th>cpf</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        {/*  TESTE DO CSS
                            <tbody>  
                            <tr>
                                <td> bgv</td>
                                <td> aa</td>
                                <td> gae</td>
                                <td> fff</td>
                                <td> vsd </td>
                                    <td>
                                        <span>
                                            <img src='/assets/images/lista.png' />
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <img src='/assets/images/editar.png' onClick={() => navigate(`/cadastro/leitor/`)}/>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <img src='/assets/images/lixeira.png' />
                                        </span>
                                    </td>
                            </tr>    
                        </tbody>
                    */}



                        <tbody>
                            {new Array(searchList)?.map((item, i) =>
                            <tr key={i}>
                                <td> {item.id}</td>
                                <td> {item.leitor }</td>
                                <td> {item.curso}</td>
                                <td> {item.turma}</td>
                                <td> {item.cpf} </td>
                                    <td>
                                        <span>
                                            <img src='/assets/images/lista.png' />
                                        </span>
                                    </td>
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
                            <button onClick={() => navigate('/cadastro/leitor/0')}><img src='/assets/images/maisbr.png' />Adicionar Leitor</button>
                        </div>
                    </div>
            </div>

            </section>
        </main>
    )
}