import './index.scss'

import ComponenteHeader from '../../components/header'



export default function Principal() {
    return (
        <main className='principal'>
            <ComponenteHeader />
            <section className='info-principal'>
                <div className='fundo'>
                    <div className='mensagem'>
                        <p>Olá <span>@Admin</span>, atualmente temos:</p>
                    </div>
                    <div className='fundo-livros'>
                        <div>
                            <div className='div-livro'>
                                <p>Livros emprestados: <span>6</span></p>
                            </div>
                            <div className='div-livro'>
                                <p>Livros atrasados: <span className='spn-atrasado'>0</span></p>
                            </div>
                        </div>
                        <div className='div-livro'>
                            <p>Livros para recolher hoje: <span>2</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}