import React from 'react';

const ButtonForm = () => {
    return (
        <div className='ButtonComponents'>
            <div>
                 <button type="button" className='btn' onclick={ButtonForm}>
                 Formulario de Contacto
                </button>
            </div>
        </div>
    );
}

export default ButtonForm;