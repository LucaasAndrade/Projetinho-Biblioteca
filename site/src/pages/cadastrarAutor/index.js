import './index.scss';

import ComponenteHeader from '../../components/header';


export default function CadastrarAutor() {
    return(
        <main className='page-cadastro-autor'>
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='fundo-cadastrar'>
                    <div className='fundo-info'>
                        <p>Nome:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' />
                        
                        <div className='text-inp'>
                            <div className='col-dois'>
                                <div>
                                    <p>Nacionalidade:</p>
                                    <select>
                                        <option value="" selected disabled hidden>Selecione</option>
                                        <option value="??"> ?? </option>
                                        <option value="??"> ?? </option>
                                        <option value="??"> ?? </option>
                                        <option value="??"> ?? </option>
                                        <option value="??"> ?? </option>
                                    </select>
                                </div>
                            </div>
                            <div className="textarea">
                                <p>Observações:</p>
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='EXEMPLO'></textarea>
                            </div>
                        </div>
                        <div className='div-botoes'>
                            <button><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}