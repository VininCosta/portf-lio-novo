import './Contato.css';
import { BsPinMapFill, BsFillEnvelopeOpenFill, BsFillPhoneFill } from "react-icons/bs";

function Contato(){
    return (
       <>
           <div className='container__contato'>
            <h1 className='text__contato'>Contato</h1> 
            <div className='contato'>
                <h4><BsPinMapFill />  Localização</h4>
                <p>São Paulo, SP - Zona Leste - Tatuapé</p>
            </div>
            <div className='contato'>
                <h4><BsFillEnvelopeOpenFill />  E-mail</h4>
                <p>viniciustvcosta@outlook.com</p>
            </div>
            <div className='contato'>
                <h4><BsFillPhoneFill /> Telefone</h4>
                <p>(11) 98402-6140</p>
            </div>
           </div>
        </>
    )
}

export default Contato;