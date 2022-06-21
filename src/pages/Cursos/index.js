import './Cursos.css';
import Certificado from '../../assets/certificado.png';




function Cursos() {
    return (
        <div className="container__cursos">
            <h1 className="text__cursos">Cursos e Certificados</h1>
            <img className='img__cursos' src={Certificado} />
            <h2 className='text__cursos2'>Bootcamp e Cursos</h2>
            <ul className='ul__cursos'>
                <li className='li__cursos'>Bootcamp - Grupo DPSP | A liga Digital | Universidade Coorporativa - Fuulstack</li>
                <li className='li__cursos'>HTML5, CSS3 e Javascript - SerFrontEnd</li>
                <li className='li__cursos'>React e Typescript - Coder's Club</li>
                <li className='li__cursos'>React: Escrevendo com Typescript - Alura</li>
                <li className='li__cursos'>Dominando Typescript - Hcode</li>
                <li className='li__cursos'>React.js: Do zero ao avançado - Matheus Fraga</li>
                <li className='li__cursos'>Git e Github - Alura</li>
                <li className='li__cursos'>Metodologia Ágil Scrum - Grupo Voitto</li>
                <li className='li__cursos'>Responsive Web Design - freeCodeCamp</li>
                <li className='li__cursos'>Lógica de Programação - iPed</li>

            </ul>
        </div>
    )
}

export default Cursos;