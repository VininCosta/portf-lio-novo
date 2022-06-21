import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Cursos from './pages/Cursos';
import Contato from './pages/Contato';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path='/projetos' element={ <Projetos /> } />
            <Route path='/cursos' element={ <Cursos /> } />
            <Route path='/contato' element={ <Contato /> } />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;