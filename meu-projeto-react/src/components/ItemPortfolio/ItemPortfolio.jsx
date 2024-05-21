import React from 'react';
import portfolio from '../Portfolio/Portfolio';
import rafaPerfil from '../../assets/rafa-perfil.jpg'
import { Link } from 'react-router-dom';
import './ItemPortfolio.css';

function ItemPortfolio(props) {
    return(
     
        <div className="item-portfolio">
          <a href= {"https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz"} target="_blank"> 
           <img src={rafaPerfil} alt="foto de perfil de rafa"/>
          
          <p>{props.title}</p>
        </a>
        </div>

/*<div className="item-portfolio">
<a href= "https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz">  <img src={rafaPerfil} alt="foto de perfil de rafa" id="perfil"/>

<p>INSTAGRAM </p>
</a>
</div>*/

    );
}

export default ItemPortfolio;