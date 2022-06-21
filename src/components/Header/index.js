import './Header.css';
import { Link } from 'react-router-dom'


function Header() {
    return(
        <header className="header">
            <nav className="header__nav">
                <ul>
                    <Link className="header__li" to='/'>Home</Link>
                    <Link className="header__li" to='/projetos'>Projetos</Link>
                    <Link className="header__li" to='/cursos'>Cursos</Link>
                    <Link className="header__li" to='/contato'>Contato</Link>
                </ul>
            </nav>
        </header>   
    )
}

export default Header;