import './index.scss';

import ComponenteHeader from '../../components/header';


export default function AdicionarLivros() {
    return(
        <main className='adicionar'>
            <ComponenteHeader />
            <section className='info-adicionar'>
                <div className='fundo-adicionar'>
                    <div className='fundo-imagem'>
                        <img src='/assets/images/add-imagem.png' />
                    </div>
                    <div className='fundo-info'>
                        <p>Nome:</p>
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
                        <div className='text-inp'>
                            <div className="textarea">
                                <p>Observações:</p>
                                <textarea className="descricao" name="story" rows="7" cols="46" placeholder='EXEMPLO'></textarea>
                            </div>
                            <div className='quantidade'>
                                <p>Qtd. Disp:</p>
                                <input type='number' placeholder='0'/>
                            </div>
                        </div>
                        <div className='div-botoes'>
                            <button><img src='/assets/images/mais+.png' />Cadastrar Autores</button>
                            <button><img src='/assets/images/mais+.png' />Cadastrar Gêneros</button>
                            <button><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}