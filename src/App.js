import React from 'react';
import Navbar from './components/Navbar'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Users from './components/Users';
import Formulario from './components/Formulario';
import RickAndMorty from './components/RickAndMorty';


const App = () =>{
    return(
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/user" element={<Users/>} />
            <Route path="/form" element={<Formulario/>} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;