import React from "react";
import rafaPerfil from "../../assets/rafa-perfil.jpg"
import './Header.css';

function Header() {
    return (
        <header>
      <div className="imagem"><img src={rafaPerfil} alt="foto de perfil de rafa" id="perfil"/></div>  
<h1>Rafaella Alves</h1>
<h3 >Desenvolvedora de Software</h3>
        </header>
        
    )
    
}

export default Header;