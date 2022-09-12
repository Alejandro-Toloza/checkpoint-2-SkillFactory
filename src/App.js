import React from 'react';
import ButtonForm from './components/ButtonForm';
import ButtonRickAndMorty from './components/ButtonRickAndMorty';
//import Hello from './components/Hello' 
//import Users from './components/Users'
//import Formulario from './components/Formulario'
//import RickAndMorty from './components/RickAndMorty'
import ButtonUsers from './components/ButtonUsers';

const App = () =>{
    return(
    <div className='App'>
        <h1>TP 1 - Skill Factory</h1>
        <ButtonUsers/>
        <ButtonForm/>
        <ButtonRickAndMorty/>
    </div>
    );
}

export default App;