import './index.scss'




export default function ComponenteHeader() {
    return (
        <header className='componente-header'>
            <div className='opcoes'>
                <div className='opcao'>
                    <img src='/assets/images/inicio.png' />
                    <p>Tela principal</p>
                </div>
                <div className='opcao'>
                    <img src='/assets/images/mais.png' />
                    <p>Adicionar livros</p>
                </div>
                <div className='opcao'>
                    <img src='/assets/images/perfil.png' />
                    <p>Cadastrar leitor</p>
                </div>
                <div className='opcao'>
                    <img src='/assets/images/menu.png' />
                    <p>Empréstimos</p>
                </div>
            </div>
            <div>
                <img className='logo' src='/assets/images/logo.png' />
            </div>
        </header>
    )
}