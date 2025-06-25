import React from "react";
import "../hojas-de-estilo/BotonClear.css"

const BotonClear = (props) =>(

    <div className="boton-clear" 
         onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear;

//al pasar Props y poner props.children se refiere que todo lo que tenga como hijo la etiqueta 
//va a poder utilizarse como props.