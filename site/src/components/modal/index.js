import './index.scss'

export default function ModalPerfil({ exibir, fechar }) {
   


    return (
        <div className='comp-modal-perfil'>
            <div className={`modal-perfil ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                    
                    <buttton className='fechar' onClick={fechar}> x </buttton>
                    
                    <div className='fundo-perfil'>
                        
                        <h5> xgh </h5>
                    </div>
                    <div className='dados'>
                        <div className='div-info-dois'>
                            <p>E-mail: </p>
                            <p className='p-dois'>Telefone: </p>
                        </div>
                        <hr className="linha" />
                        

                        <div className='div-info'>
                            
                            <div className='img-topico-dois'>
                                <p>Adicionados ao Carrinho</p>
                            </div>
                        </div>
                        <hr className="linha" />

                        <div className='div-info'>
                            <div className='img-topico'>
                                
                                <p >Editar</p>
                            </div>
                            <div className='img-topico-dois'>
                                <img src='/images/sair.png'></img>
                                <div onClick={fechar}> <p >Sair</p> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}