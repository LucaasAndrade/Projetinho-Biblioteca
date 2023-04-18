import './index.scss';

import ComponenteHeader from '../../components/header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InfromaçõesLeitor() {
    return(
        <main className='informacao-leitor'>
            <ToastContainer />
            <ComponenteHeader />

            <section className='info-leitor'>
                <div>
                    <div className='titulo'>
                        <hr className='linha' />
                        <h2>Infromações do Leitor:</h2>
                    </div>
                    <div className='fundo-leitor'>
                        <div className='fundo-imagem'>
                            <img src='/assets/images/add-imagem.png' />
                        </div>
                        <div className='fundo-info'>
                            <div>
                                <p>Nome:</p>
                                <input className='inp-nome' type='text' placeholder='EXEMPLO'/>
                            </div>
                            <div className='p-input'>
                                <p>E-mail:</p>
                                <input className='inp-nome' type='text' placeholder='EXEMPLO@EXEMPLO' />
                            </div>
                            <div className='col-dois'>
                                <div>
                                    <p>CPF:</p>
                                    <input type='text' placeholder='000.000.000-0' />
                                </div>
                                <div className='div-col-dois'>
                                    <p>Telefone p/ contato:</p>
                                    <input type='tell' placeholder='(xx) xxxxx-xxxx'/>
                                </div>
                            </div>
                            <div className='col-dois'>
                                <div>
                                    <p>Curso:</p>
                                    <select>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className='div-col-dois'>
                                    <p>Turma:</p>
                                    <select>
                                        <option> </option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className='div-col-dois'>
                                    <p>Turma p/ ano:</p>
                                    <select placeholder='Ano'>
                                    </select>
                                </div>

                            </div>
                            <div className="textarea">
                                <p>Endereço:</p>
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='EXEMPLO'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}