import React from 'react';
import './Portfolio.css';
import rafaPerfil from '../../assets/rafa-perfil.jpg';
import portfolioData from './Portfolio.json'
import ItemPortfolio from '../ItemPortfolio/ItemPortfolio';
import {Link} from 'react-router-dom';

function portfolio() {

   
      return(
        <main>
          {portfolioData.map(
            (item, index) => 
            <ItemPortfolio
             key={index}
             Link={item.Link}
             image={item.image}
             title={item.title }
            ></ItemPortfolio>
          )}
        </main>
      )
    }      
    
   /* return(
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
    )*/


export default portfolio;