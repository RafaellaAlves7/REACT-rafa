import React from "react";
import './Contato.css';

function Contato() {
    return (
        
       <form onsubmit="event.preventDefault()">

        <fieldset>
           <label for="input-name">Nome</label>
           <input type="text" name="input-nome" id="input-nome" required minlength="3"/>
        </fieldset>

        <fieldset>
            <label for="input-email"> E-mail</label>
            <input type="email" name="input-email" id="input-email" required/>
        </fieldset>
        
        <fieldset>
            <label for="input-tel">Telefone</label>
            <input type="tel" name="input-tel" id="input-tel" placeholder="(99) 99999-9999" required pattern="^\(\d{2}) \d{5}-\d{4}$" maxlength="15"/>
        </fieldset>

        <fieldset>
            <label for="input-msg">Mensagem</label>
            <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>

            <center>
                <input type="submit" value="ENVIAR" class="button" onclick="enviarFormulario()"/>
            </center>
        </fieldset>

       </form>

    )
}

export default Contato;