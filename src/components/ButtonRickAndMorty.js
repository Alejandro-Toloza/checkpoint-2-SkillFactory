import React from 'react';
import RickAndMorty from './RickAndMorty';

const ButtonRickAndMorty = () => {
    return (
        <div className='ButtonComponents'>
            <div>
                <button type="button" className="btn" onclick={ButtonRickAndMorty}>
                API Rick & Morty
                </button>
            </div>
        </div>
    );
}

export default ButtonRickAndMorty;