import './index.scss';

import ComponenteHeader from '../../components/header';

import { useEffect, useRef, useState } from 'react';
import { ConsultarTodosCursos, ConsultarTurmasCurso } from '../../api/cursoTurma';
import { FormatarTelefone } from '../../assets/FormatarTelefone';
import { AlterarInformacoesUsuario, BuscarLeitorPorId, CadastarUsuario } from '../../api/leitor';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

export default function CadastrarLeitor() {
    
    const navigate = useNavigate();

    
    return(
        <main className='cadastrar'>
            <LoadingBar color='#ff0000'  />
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-cadastro'>
                <p>Cadastro de Livros</p>
                <div className='fundo-cadastro'>
                    <div>
                        <p>Título do Livro:</p>
                        <input type='text' />
                        <div>
                            <div>
                                <p>Nome do Autor:</p>
                                <input type='text' />
                            </div>

                            <div>
                                <p>Gênero:</p>
                                <select>
                                    <option>Um</option>
                                    <option>Dois</option>
                                    <option>Três</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Código ISBN:</p>
                                <input type='text' />
                            </div>
                            <div>
                                <p>Editora:</p>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='text-inp'>
                            <div className="textarea">
                                <p>Observações:</p>
                                <textarea className="descricao" name="story" rows="7" cols="46"></textarea>
                            </div>
                        </div>

                        <div className='div-botoes'>
                            <button><img src='/assets/images/confere.png' />Salvar Alteração</button>
                            <button><img src='/assets/images/mais+.png' />Gerenciar cursos e turmas</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}