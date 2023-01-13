import './index.scss';

import ComponenteHeader from '../../components/header';


export default function HistoricoLivros(props) {
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
                            <th>Qtd. Disponível</th>
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
                                <td><span><img src='/assets/images/editar.png' /></span></td>
                                <td><span><img src='/assets/images/lixeira.png' /></span></td>
                            </tr>    
                    </tbody>
                </table>
                    <div className='div-botoes'>
                        <button><img src='/assets/images/mais+.png' />Cadastrar Autores</button>
                        <button><img src='/assets/images/mais+.png' />Adicionar Livros</button>
                    </div>
            </div>
        </div>

            </section>
        </main>
    )
}