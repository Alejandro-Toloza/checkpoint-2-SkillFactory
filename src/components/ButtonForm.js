import React from 'react';
import Formulario from './Formulario';

const ButtonForm = () => {
    return (
        <div className='ButtonComponents'>
            <div>
            <button type="button" className="btn" onclick={Formulario}>
            Formulario
            </button>
            </div>
        </div>
    );
}

export default ButtonForm;