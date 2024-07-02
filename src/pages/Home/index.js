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
        <p>Desenvolvedor Full-Stack com experiência em tecnologias modernas como React, JavaScript, TypeScript, Node.js, Express.js, Nest.js e bancos de dados SQL. Hábil na criação de soluções web eficientes e escaláveis, com foco tanto no front-end quanto no back-end. Capaz de gerenciar todo o ciclo de desenvolvimento de software, desde o planejamento e design até a implementação e manutenção. Meu objetivo é contribuir para projetos desafiadores e inovadores, utilizando minhas habilidades técnicas para entregar produtos de alta qualidade.</p>
        <h4>Formação Acadêmica</h4> 

        <ul>
        <li><strong>Instituição:</strong> Universidade Anhembi Morumbi; </li>
        <li><strong>Curso:</strong> Desenvolvimento de software e Metodologias Ágeis ;</li>
        <li><strong>Formação:</strong> Junho/2024;</li>
        </ul>

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