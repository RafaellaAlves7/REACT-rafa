import React from 'react';
import './Curriculo.css';
import data from './Curriculo.json';

function Curriculo (){

    return (
        <main>

            <section>
                <h2>Resumo</h2>
                <p>{data.resumo}</p>
            </section>

        
        <div><h2>Acadêmico</h2>
            
            <ul>
                {data.experienciaAcademica.map((item, index) => (
                    <li key ={index}> {item.titulo}
                  

                    </li>
            ))}
                
            </ul>
        </div>
        
        <div><h2>Profissional</h2>
            <ul>
                <li>Maker e vendas.</li>
                
                
            </ul>
        </div>
    </main>
    )
}

export default Curriculo;