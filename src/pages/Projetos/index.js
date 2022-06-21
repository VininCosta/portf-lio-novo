import './Projetos.css';
import Lista from '../../assets/lista_compras.png'
import Vini from '../../assets/vini-flix.png';
import CEP from '../../assets/busca-cep1.png';
import todo from '../../assets/todo-list.png';
import urna from '../../assets/urna-eletronica.jpg';
import Flexbox from '../../assets/flexbox-css.png';
import Netflix from '../../assets/5.jpg';
import Calc from '../../assets/calc.png';
import Responsivo from '../../assets/design-responsivo.png';

function Projetos() {
    return (
       <> <div className='container__projetos'>
            <h1 className='title'>Projetos</h1> 
            <article>
            <img className="img" src={Lista} />
            <p className='text__projetos'>Site feito com React.js e Node.js consumindo uma API para lista de compras.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/lista-compras-vemserdev" target="_blank">Ver Projeto</a></button> 
            </article> <p></p>
            <article>
            <img className='img' src={Vini} />
            <p className='text__projetos'>Site de filmes feito em React.js consumindo API externa</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/vini-flix" target="_blank">Ver Projeto</a></button>
            </article> <p></p>
            <article>
            <img className='img' src={CEP} />
            <p className='text__projetos'>App buscador de CEP utilizando React e API</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/buscador-cep" target="_blank">Ver Projeto</a></button>
            </article> 
            <article>
            <img className="img" src={todo} />
            <p className='text__projetos'>Lista de Tarefas feita em React e Typescript.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/todo-list" target="_blank">Ver Projeto</a></button> 
            </article> <p></p>
            <article>
            <img className='img' src={urna} />
            <p className='text__projetos'>Urna Eletrônica feita com Javascript.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/Urna-Eletronica" target="_blank">Ver Projeto</a></button>
            </article> <p></p>
            <article>
            <img className='img' src={Flexbox} />
            <p className='text__projetos'>Site fictício feito com Flexbox.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/Flexbox" target="_blank">Ver Projeto</a></button>
            </article> <p></p>
            <article>
            <img className="img" src={Netflix} />
            <p className='text__projetos'>Clone feito com HTML , CSS e Javascript.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/Clone-Netflix" target="_blank">Ver Projeto</a></button> 
            </article> <p></p>
            <article>
            <img className='img' src={Calc} />
            <p className='text__projetos'>Calculadora feita com Javascript.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/Calculadora" target="_blank">Ver Projeto</a></button>
            </article> <p></p>
            <article>
            <img className='img' src={Responsivo} />
            <p className='text__projetos'>Site fictício feito com responsividade.</p>
            <button className="btn__projetos"><a href="https://github.com/VininCosta/site-estudo" target="_blank">Ver Projeto</a></button>
            </article> <p></p>
        </div>
        </>
    )
}

export default Projetos;