import React from "react";
import '../hojas-de-estilo/Pantalla.css'

const Pantalla = ({ input }) => (
  <div className="input">
    {input}
  </div>
)


export default Pantalla;

//Se puede hacer una funcion flecha en un componente
//siempre y cuando sea un componente basico que solo tenga una funcion
//se usa Imput en ves de props porque es una forma de desestructuracion
// para que sea mas facil de leer
