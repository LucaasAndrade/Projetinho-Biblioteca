import './index.scss';

import ComponenteHeader from '../../components/header';


export default function CadastrarGenero() {
    return(
        <main className='page-cadastro-genero'>
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='fundo-cadastrar'>
                    <div>
                        <p>Gênero:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' />
                        
                        <div className='div-botoes'>
                            <button><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}