import React from 'react';
import { Link } from 'react-router-dom';

function BarraNavegacao() {
    return(
        <nav>

          <div id="container">
            <div><Link to="/">Currículo</Link></div>
            <div><Link to="/Portfolio">Portfólio</Link></div>
            <div><Link to="/Contato">Contato</Link></div>


          </div>
        </nav>
    )
}


export default BarraNavegacao;