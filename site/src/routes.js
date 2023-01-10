import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login'
import Principal from './pages/principal';
import CadastrarLeitor from './pages/cadastrarLeitor';
import AdicionarLivros from './pages/adicionarLivros';
import CadastrarAutor from './pages/cadastrarAutor';
import CadastrarGenero from './pages/cadastrarGeneros';
import Emprestimos from './pages/emprestimos';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Principal />} />
                <Route path='/cadastro/leitor' element={<CadastrarLeitor />} />
                <Route path='/adicionar/livro' element={<AdicionarLivros />} />
                <Route path='/cadastro/autor' element={<CadastrarAutor />} />
                <Route path='/cadastro/genero' element={<CadastrarGenero />} />
                <Route path='/emprestimo' element={<Emprestimos />} />
            </Routes>
        </BrowserRouter>
    )
}