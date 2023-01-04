import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login'
import Principal from './pages/principal';
import CadastrarLeitor from './pages/cadastrarLeitor';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Principal />} />
                <Route path='/cadastro/leitor' element={<CadastrarLeitor />} />
            </Routes>
        </BrowserRouter>
    )
}