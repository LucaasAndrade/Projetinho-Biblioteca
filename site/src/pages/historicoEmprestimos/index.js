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
               
            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Turma</th>
                            <th>Livro Emprestado:</th>
                            <th>Emprestado em:</th>
                            <th>Data de Devolução:</th>
                        </tr>
                    </thead>
                        <tbody>
                            {emprestimos.map(item =>
                                <tr>
                                <td> {item.usuario} </td>
                                <td> {item.curso} </td>
                                <td> {item.turma}</td>
                                <td> {item.livro} </td>
                                <td> {InverterDatas(item.data_de_retirada)} </td>
                                <td> {InverterDatas(item.data_para_entregar)} </td>
                            </tr>
                                )}
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button onClick={() => navigate('/emprestimo')}><img src='/assets/images/mais+.png' />Novo Empréstimo</button>
                    </div>
            </div>

            </section>
        </main>
    )
}