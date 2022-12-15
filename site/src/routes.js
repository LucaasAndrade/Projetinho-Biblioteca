import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login'
import Principal from './pages/principal';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Principal />} />
            </Routes>
        </BrowserRouter>
    )
}