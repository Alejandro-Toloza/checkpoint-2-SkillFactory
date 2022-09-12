import React from 'react';
import Hello from './components/Hello' 
import Users from './components/Users'
import Formulario from './components/Formulario'
import RickAndMorty from './components/RickAndMorty'

const App = () =>{
    return(
    <div className='App'>
        <h1>Hola Mundo</h1>
        <Hello/>
        <Users/>
        <Formulario/>
        <RickAndMorty/>
    </div>
    );
}

export default App;