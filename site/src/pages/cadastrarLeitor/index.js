import './index.scss';

import ComponenteHeader from '../../components/header';


export default function CadastrarLeitor() {
    return(
        <main className='cadastrar'>
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='fundo-cadastro'>
                    <div className='fundo-imagem'>
                        <img src='/assets/images/add-imagem.png' />
                    </div>
                    <div className='fundo-info'>
                        <p>Nome:</p>
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
                        <div className="textarea">
                            <p>Observações:</p>
                            <textarea className="descricao" name="story" rows="7" cols="46" placeholder='EXEMPLO'></textarea>
                        </div>
                        <div className='div-botoes'>
                            <button ><img src='/assets/images/mais+.png' />Adicionar Turma/Curso</button>
                            <button className='gerar-carteirinha'><img src='/assets/images/carta.png' />Gerar Carterinha</button>
                            <button><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}