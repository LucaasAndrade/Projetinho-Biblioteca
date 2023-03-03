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
    const [cursos, setCursos] = useState([]);
    const [turmas, setTurmas] = useState([])
    
    const [escolhaCursoId, setEscolhaCursoId] = useState();
    const [escolhaTurmaId, setEscolhaTurmaId] = useState();

    const [nomeCurso, setNomeCurso] = useState();
    const [nomeTurma, setNomeTurma] = useState();

    const [nomeLeitor, setNomeLeitor] = useState('');
    const [telefoneParaContato, setTelefoneParaConontato] = useState('')
    const [observacoes, setObservacoes] = useState('');

    const [desativado, setDesativado] = useState(false)

    const ref = useRef(null);
    const navigate = useNavigate();

    const { id } = useParams();

    async function ConsultarCurso() {
        const resposta = await ConsultarTodosCursos();
        setCursos(resposta);
    }

    async function ConsultarTurmas(id) {
        const resposta = await ConsultarTurmasCurso(id);
        setTurmas(resposta);
    }


    async function SalvarClick() {
        try {
            if (id === '0') {
                const r = await CadastarUsuario(escolhaCursoId, escolhaTurmaId, nomeLeitor, telefoneParaContato, observacoes);
                
                toast.success('Usuario Cadastrado com sucesso ✔', {autoClose: 2000, delay: 0, pauseOnHover: false});
                
                ref.current.continuousStart();
                
                setTimeout(() => {
                    navigate('/leitores')
                }, 3000)
            } else {
                const r = await AlterarInformacoesUsuario(id, nomeLeitor, telefoneParaContato, observacoes);

                toast.success('Alterações realizadas com sucesso ✔', {autoClose: 2000, delay: 0, pauseOnHover: false});

                ref.current.continuousStart();

                setTimeout(() => {
                    navigate('/leitores')
                }, 3000)
            }
        } catch (err) {
            window.alert("Error")
        }
    }

    async function BuscarLeitor() {
        if (id !== '0') {
            const r = await BuscarLeitorPorId(id);
            console.log(r);
            setNomeLeitor(r.leitor);
            setTelefoneParaConontato(r.telefone);
            setObservacoes(r.observacoes);
            setEscolhaCursoId(r.idCurso);
            setEscolhaTurmaId(r.idTurma);
            setNomeCurso(r.curso);
            setNomeTurma(r.turma);
            setDesativado(true);
        } else {
            return;
        }
    }

    useEffect(() => {
        ConsultarCurso()
        BuscarLeitor()
    }, [])

    useEffect(() => {
        ConsultarTurmas(escolhaCursoId);
        setTelefoneParaConontato(FormatarTelefone(telefoneParaContato))
    }, [escolhaCursoId, telefoneParaContato])

    return(
        <main className='cadastrar'>
            <LoadingBar color='#ff0000' ref={ref} />
            <ToastContainer />
            <ComponenteHeader />
            <section className='info-cadastro'>
                <div className='fundo-cadastro'>
                    <div className='fundo-imagem'>
                        <img src='/assets/images/add-imagem.png' />
                    </div>
                    <div className='fundo-info'>
                        <p>Nome:</p>
                        <input className='inp-nome' type='text' placeholder='EXEMPLO' value={nomeLeitor} onChange={e => setNomeLeitor(e.target.value)} />
                        <div className='col-dois'>
                            <div>
                                <p>Curso:</p>
                                <select onChange={e => setEscolhaCursoId(e.target.value)} disabled={desativado}>
                                    <option value={escolhaCursoId} selected disabled hidden>{!nomeCurso ? 'Curso' : `${nomeCurso}`}</option>
                                    {cursos.map(item => 
                                    <option value={item.id_curso}> {item.nm_curso} </option>    
                                    )}
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Turma:</p>
                                <select onChange={e => setEscolhaTurmaId(e.target.value)}>
                                    <option value={escolhaTurmaId} selected disabled hidden> {!nomeTurma ? 'Turma' : `${nomeTurma}`} </option>
                                    {turmas.map(item =>
                                        <option value={item.id}> {item.turma}</option>
                                    )}
                                </select>
                            </div>
                            <div className='div-col-dois'>
                                <p>Telefone p/ contato:</p>
                                <input type='tell' placeholder='(xx) xxxxx-xxxx' value={telefoneParaContato} onChange={e => setTelefoneParaConontato(e.target.value) } />
                            </div>
                        </div>
                        <div className="textarea">
                            <p>Observações:</p>
                            <textarea className="descricao" name="story" rows="7" cols="46" placeholder='EXEMPLO' value={observacoes} onChange={e => setObservacoes(e.target.value)}></textarea>
                        </div>
                        <div className='div-botoes'>
                            <button ><img src='/assets/images/mais+.png' />Adicionar Turma/Curso</button>
                            <button className='gerar-carteirinha'><img src='/assets/images/carta.png' /> Gerar Carterinha </button>
                            <button onClick={SalvarClick}><img src='/assets/images/confere.png' />Salvar Alteração</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}