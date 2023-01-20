import './index.scss';

import ComponenteHeader from '../../components/header';


export default function HistoricoEmprestimos() {
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
                            <tr>
                                <td> um </td>
                                <td> dois </td>
                                <td> tres</td>
                                <td> quatro </td>
                                <td> cinco </td>
                                <td> seis </td>
                            </tr>    
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button><img src='/assets/images/mais+.png' />Novo Empréstimo</button>
                    </div>
            </div>

            </section>
        </main>
    )
}