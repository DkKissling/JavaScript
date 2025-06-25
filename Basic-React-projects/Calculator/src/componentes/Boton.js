import React from "react";
import '../hojas-de-estilo/Boton.css';


const esOperador = valor => {
  return isNaN(valor) && (valor != '.') && (valor != '=')
}
// funcion que hace que si la props es distinto de . = o num retorna
//verdadero en caso contratrio FALSO

function Boton(props){
  return(
    ///LA FUNCION QUE SE PASA DENTRO DEL DIV 
    ///HACE QUE SI EN CASO DE SER VERDADERO LE ASIGNA LA ETIQUETA OOPERADOR
    //EN CASO DE SER FALSO LO DEJA SIN ETIQUETA

    //EL METODO TRIMEND SIRVE PARA ELIMINAR ESPACIOS DE LAS CLASES OSEA PARA QUE 
    // BOTON-CONTENEDOR NO TENGA UN ESPACIO SEGUIDO

    <div className={`boton-contenedor 
      ${esOperador(props.children) ? 'operador' : "" }`.trimEnd()}
      onClick= {()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
    )
}
// al agregar el eventop onClick  necesita una funcion porque aunque nosotros en los valores le pasamos la funcion
// no se puede comunicar ya que lo toma como una cadena de caracteres. para AVISARLE AL div que es una funcion
//necesitamos hacer una funcion anonima 


//UNA FUNCION ANONIMA ES UNA FUNCION QUE SOLAMENTE SE VA A USAR UNA VEZ NO MAS 

export default Boton;
