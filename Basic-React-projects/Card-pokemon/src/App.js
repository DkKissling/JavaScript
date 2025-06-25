import './App.css';
import React from "react";
import Index from './Component/Index';
import LogoPokemon from './image/Logo-Pokemon.png'


function App() {
  return (
    <div className="App"> 
      <img
          className="Pokemon-logo"
          src={LogoPokemon}
          alt="logo de Pokemon"
      ></img>
      <Index></Index>
    </div>
  );
}

export default App;
