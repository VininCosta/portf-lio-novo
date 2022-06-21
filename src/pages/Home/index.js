import './Home.css';
import Perfil from '../../assets/perfil.jpeg';

function Home() {
    return(
        <>
        <section className="section">
        <img src={Perfil} /> 
        <button className="btn">
            <a href='https://resume.io/r/tKYCP41yV' target="_blank">Currículo</a>
        </button>
        <div className="about-me">
        <h3>Sobre mim</h3> 
        <p>Sou um amante da tecnologia, com formação também na área administrativa. Possuo conhecimentos em ferramentas HTML, CSS, Javascript, React.js e Node.js para construção e design de experiências digitais. Procuro sempre estar me atualizando, dentro do mundo da tecnologia.</p>

        <h4>Formação Acadêmica</h4> 

        <ul>
        <li><strong>Instituição:</strong> Centro Universitário das Faculdades Metropolitanas Unidas; </li>
        <li><strong>Curso:</strong> Análise e Desenvolvimento de Sistemas;</li>
        <li><strong>Formação:</strong> Junho/2023;</li>
        </ul>
        
        <ul>
            <li><strong>Instituição:</strong> Universidade São Judas Tadeu;</li>
            <li><strong>Curso:</strong> MBA em Gestão Estratégica de Pessoas;</li>
            <li><strong>Formação:</strong> Junho/2017</li>
        </ul>
        
        <ul>
            <li><strong>Instituição:</strong> Universidade São Judas Tadeu;</li>
            <li><strong>Curso:</strong> Tecnólogo em Processos Gerenciais;</li>
            <li><strong>Formação:</strong> Dezembro/2015</li>
        </ul>
    </div>
    </section>
    </>
    )
}

export default Home;