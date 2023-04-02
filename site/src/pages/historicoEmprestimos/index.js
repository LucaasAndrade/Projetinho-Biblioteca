import './index.scss';

import ComponenteHeader from '../../components/header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {InverterDatas} from '../../assets/InverterData.js'
import { ConsultarTodosEmprestimos } from '../../api/emprestimos';

export default function HistoricoEmprestimos() {
    const [emprestimos, setEmprestimos] = useState([]);

    const navigate = useNavigate();


    async function ConsultarEmprestimos() {
        const r = await ConsultarTodosEmprestimos();
        console.log(r);
        setEmprestimos(r)
    }

    useEffect(() => {
        ConsultarEmprestimos();
    }, [])

    return(
        <main className='page-emprestimos'>
            <ComponenteHeader />
            <section className='info-emprestimos'>

            <div className='titulo'>
                <hr className='linha' />
                <h2>Empréstimos</h2>
            </div>
            
            <div className='div-pesquisa'>
                <div>
                    <label>De:</label>
                    <input type='date'/>
                </div>
                <div>
                    <input type='radio' />
                    <label for='rd'>Pendentes</label>
                    <input type='radio' />
                    <label for='rd'>Entregues</label>
                    <input type='radio' />
                    <label for='rd'>Atrasados</label>
                </div>
                <div className='divBusca'>
                    <input type='text' className='txtBusca' placeholder='Pesquisar'/>
                    <img src='/assets/images/lupa.png' className='btnBusca' alt='Buscar' />
                </div>
            </div>

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>livro</th>
                            <th>curso</th>
                            <th>turma</th>
                            <th>retirado</th>
                            <th>devolução</th>
                        </tr>

                    </thead>

                        <tbody>
                            {emprestimos.map(item =>
                                <tr>
                                <td> {item.usuario} </td>
                                <td> {item.livro} </td>
                                <td> {item.curso} </td>
                                <td> {item.turma}</td>
                                <td> {InverterDatas(item.data_de_retirada)} </td>
                                <td> {InverterDatas(item.data_para_entregar)} </td>
                            </tr>
                                )}
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button onClick={() => navigate('/emprestimo')}><img src='/assets/images/maisbr.png' />Novo Empréstimo</button>
                    </div>
            </div>

            </section>
        </main>
    )
}