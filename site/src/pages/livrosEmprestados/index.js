import './index.scss';

import ComponenteHeader from '../../components/header';


export default function LivrosEmprestados() {
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
                            <th>Turma</th>
                            <th>Livro Emprestado:</th>
                            <th>Emprestado em:</th>
                            <th>Data de Devolução:</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td> um </td>
                                <td> dois </td>
                                <td> tres</td>
                                <td> quatro </td>
                                <td> cinco </td>
                                <td><span><img src='/assets/images/x.png' /></span></td>
                            </tr>    
                    </tbody>
                </table>
                </div>
            </div>

            </section>
        </main>
    )
}