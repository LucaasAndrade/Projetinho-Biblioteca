import './index.scss'



export default function Login() {
    return (
        <main className="pagina-login">
            <div className='alinhamento'>
                <div className='fundo-imagem'>
                    <img src='/assets/images/logo.png' />
                </div>
                <div className='fundo-login'>
                    <div className='info-login'>
                        <p className='titulo'>biblioteca - insf</p>
                        <div className='inputs'>
                            <p className='p-login'>login:</p>
                            <input type='text' />
                            <p className='p-login'>senha:</p>
                            <input type='password' />
                        </div>
                        <button className='botao'>login</button>
                        <span className='erro'>Login ou senha inválidos</span>
                    </div>
                </div> 
            </div>
        </main>
    )
}