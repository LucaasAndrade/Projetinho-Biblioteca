import './index.scss';

import ComponenteHeader from '../../components/header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ConsultarTurma() {

    return(
        <main className='page-consulta'>
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-consulta'>
               
            <div className='pagina-consulta'>
                <div className='titulo'>
                    <hr className='linha' />
                    <h2> Cursos </h2>
                </div>
                <div className='tabela'>
                    <table>
                        <thead>
                            <tr>
                                <th>curso</th>
                                <th>turma</th>
                                <th>ano</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                                <tbody>
                                        <tr>
                                        <td> exemplo </td>
                                        <td> exemplo</td>
                                        <td> exemplo</td>
                                            <td>
                                                <span>
                                                    <img src='/assets/images/editar.png' />
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    <img src='/assets/images/lixeira.png'/>
                                                </span>
                                            </td>
                                    </tr>
                        </tbody>
                    </table>
                </div>
        </div>

            </section>
        </main>
    )
}