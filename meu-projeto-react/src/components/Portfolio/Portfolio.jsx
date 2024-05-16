import React from 'react';
import './Portfolio.css';
import rafaPerfil from "../../assets/rafa-perfil.jpg"
import { Link } from 'react-router-dom';

function portfolio() {

    /*const Portfolios = [
        {
          Link:"https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz",
          image:"../../assets/rafa-perfil.jpg",
          title:"INSTAGRAM"
        },

        {
            Link:"https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz",
          image:"../../assets/rafa-perfil.jpg",
          title:"INSTAGRAM"

        },
        
        {
            Link:"https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz",
          image:"../../assets/rafa-perfil.jpg",
          title:"INSTAGRAM"
        }
    ]*/

    
    return(
        <main>

        <div className="item-portfolio">
          <a href= "https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz">  <img src={rafaPerfil} alt="foto de perfil de rafa" id="perfil"/>
          
          <p>INSTAGRAM </p>
        </a>
        </div>

        <div className="item-portfolio">
         <a href= "https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz">  <img src={rafaPerfil} alt="foto de perfil de rafa" id="perfil"/>
         <p>INSTAGRAM</p>
        </a>
        </div>

        <div className="item-portfolio">
            <a href= "https://www.instagram.com/__rafaella.alvess7__?igsh=bXNuc2g2NXgyMmNz ">  <img src={rafaPerfil} alt="foto de perfil de rafa" id="perfil"/>
            <p>INSTAGRAM</p>
        </a>
        </div>

    </main>
    )
}

export default portfolio;