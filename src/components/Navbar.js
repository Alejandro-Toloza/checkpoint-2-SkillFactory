import React from "react";
import { NavLink } from "react-router-dom";
import ButtonUsers from './ButtonUsers'
import ButtonRickAndMorty from './ButtonRickAndMorty'
import ButtonForm from './ButtonForm';

const Navbar = () => {
  return (
    <div className="App">
          <NavLink to="/user">{<ButtonUsers/>}</NavLink>
          <NavLink to="/rick">{<ButtonRickAndMorty/>}</NavLink>
          <NavLink to="/form">{<ButtonForm/>}</NavLink>
    </div>
  );
};

export default Navbar;
