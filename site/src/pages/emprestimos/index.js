import './index.scss';

import ComponenteHeader from '../../components/header';


export default function NovoEmprestimo() {
    return(
        <main className='novo-emprestimo'>
            <ComponenteHeader />
            <section className='info-novo-emprestimo'>
                <div className='fundo-novo-emprestimo'>
                    <div>
                        <p>Código de Identificação:</p>
                            <input type='text' placeholder='AB-CD-EF' />
                        <p className='col-dois'>Nome:</p>
                            <input className='inp-nome' type='text' placeholder='EXEMPLO' />
                        <div className='col-dois'>
                            <div>
                                <p>Curso:</p>
                                <select>
                                    <option value="" selected disabled hidden>Curso</option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Turma:</p>
                                <select>
                                    <option value=""  selected disabled hidden>Turma</option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Telefone p/ contato:</p>
                                <input type='tell' placeholder='(xx) xxxxx-xxxx'/>
                            </div>
                        </div>
                        <div className='div-data'>
                            <div>
                                <p>Data da Retirada:</p>
                                <input type='date' />
                            </div>
                            <div className='data'>
                                <p>Data da Entrega:</p>
                                <input type='date'/>
                            </div>
                        </div>
                    </div>

                    <hr className='linha' />

                    <div>
                        <p>Código do Livro:</p>
                        <input type='text' placeholder='A1BC5' />
                        <p className='col-dois'>Nome do Livro:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' />
                        <div className='col-dois'>
                            <div>
                                <p>Gênero:</p>
                                <select>
                                    <option value="" selected disabled hidden>Gênero</option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                    <option value="??"> ?? </option>
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Nome do Autor:</p>
                                <input className='inp-autor' type='text' placeholder='EXEMPLO'/>
                            </div>
                        </div>
                        <div className='div-botoes'>
                            <button><img src='/assets/images/confere.png' />Salvar</button>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}