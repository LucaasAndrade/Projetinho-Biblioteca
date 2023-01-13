import './index.scss';

import ComponenteHeader from '../../components/header';


export default function HistoricoLeitores(props) {
    return(
        <main className='page-leitores'>
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
                            <tr>
                                <td> um </td>
                                <td> dois </td>
                                <td> tres</td>
                                <td> quatro </td>
                                <td> cinco </td>
                                <td> seis </td>
                                <td> sete </td>
                                <td><span><img src='/assets/images/editar.png' /></span></td>
                                <td><span><img src='/assets/images/lixeira.png' /></span></td>
                            </tr>    
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button><img src='/assets/images/mais+.png' />Adicionar Leitor</button>
                    </div>
                </div>
            </div>

            </section>
        </main>
    )
}