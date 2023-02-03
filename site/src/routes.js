import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Principal from './pages/principal';
import CadastrarLeitor from './pages/cadastrarLeitor';
import AdicionarLivros from './pages/adicionarLivros';
import CadastrarAutor from './pages/cadastrarAutor';
import CadastrarGenero from './pages/cadastrarGeneros';
import Emprestimos from './pages/emprestimos';
import HistoricoLivros from './pages/historicoLivros';
import HistoricoLeitores from './pages/historicoLeitores';
import HistoricoEmprestimos from './pages/historicoEmprestimos';
import LivrosEmprestados from './pages/livrosEmprestados';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Principal />} />
                <Route path='/cadastro/leitor' element={<CadastrarLeitor />} />
                <Route path='/adicionar/livro/:id' element={<AdicionarLivros />} />
                <Route path='/cadastro/autor' element={<CadastrarAutor />} />
                <Route path='/cadastro/genero' element={<CadastrarGenero />} />
                <Route path='/emprestimo' element={<Emprestimos />} />
                <Route path='/livros' element={<HistoricoLivros />} />
                <Route path='/leitores' element={<HistoricoLeitores />} />
                <Route path='/historico/emprestimos' element={<HistoricoEmprestimos />} />
                <Route path='/livros/emprestados' element={<LivrosEmprestados />} />
            </Routes>
        </BrowserRouter>
    )
}