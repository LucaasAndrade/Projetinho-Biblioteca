import './index.scss';

import ComponenteHeader from '../../components/header';

import { ConsultarTodosEmprestimos } from '../../api/emprestimos';
import { useEffect, useState } from 'react';
import { InverterDatas } from '../../assets/InverterData';

export default function LivrosEmprestados() {

    const [emprestimos, setEmprestimos] = useState([]);

    async function Consultar() {
        const r = await ConsultarTodosEmprestimos();
        setEmprestimos(r);
    }


    useEffect(() => {
        Consultar();
    }, [])

    return(
        <main className='page-livros-emprestados'>
            <ComponenteHeader />
            <section className='info-livros-emprestados'>
               

            <div className='pagina-livros-emprestados'>
            <h1> Livros Emprestados: </h1>

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {emprestimos.map(item => 
                            <tr>
                                <td> {item.usuario} </td>
                                <td> {item.curso} </td>
                                <td> {item.turma} </td>
                                <td> {item.livro} </td>        
                                <td> {InverterDatas(item.data_de_retirada)} </td>        
                                <td> {InverterDatas(item.data_para_entregar)} </td>        
                            </tr>                            
                            )}
                    </tbody>
                </table>
                </div>
            </div>

            </section>
        </main>
    )
}