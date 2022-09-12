import React from 'react';

const Formulario = () => {
    return (
    <div>     
        <div class="contenedor">
        <h1>Formulario de Contacto</h1>
            <form action='' class="formulario" id="formulario" name="formulario">
                <div class="contenedor-inputs">
                <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                <input type="email" name="correo" id="email" placeholder ="Correo"/>
                <div class="terminos">
                    <input type="checkbox" name="terminos" id="terminos"/>
                    <label for="terminos">Acepto Terminos y Condiciones</label>
                </div>

                <ul class="error" id="error"></ul>

                </div>
                <input type="submit" class="btn" value="Registrarse"></input>
            </form>
        </div>
    </div>
    );
}

export default Formulario;