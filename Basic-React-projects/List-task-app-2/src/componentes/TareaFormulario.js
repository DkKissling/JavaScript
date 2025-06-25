import React, { useState } from "react";
import "../hojas-de-estilo/TareaFormulario.css"
import {v4 as uuidv4} from 'uuid';

function TareaFormulario (props){

  const [input, setInput]= useState('')

  //este evento es para manejar los cambioas que haiga en el cuadro de input se recibe un evento porque el evento 
  //que esta encargado de ver los cambios es ONCHANGE esta funcion lo que hace es cambiar el estado de input, 
  //en la const useState para asi poder guardarlo en la cadena de caracter y enviar lo que se tipeo--CADA VEZ QUE SE 
  //TIPEE ALGO EN EL CUADRO INPUT VA A LLAMAR ESTA FUNCION BASICAMENTE

  
  const manejarCambio = e => {
    setInput(e.target.value)
  }
//setInput es el nuevoi valor de input en la funcion y e.target.value es el valor de onchange en el momenot de ser llamado
  //con esto permite guardar cada valor nuevo que tippe el usuario



  //manejar envio lo que hace es manejar cuando se envie el formulario 
  //al componente LISTA DE TAREAS --- se recibe el evento onSubmit
  //lo que hace preventDefault es evitar que se recargue toda la pagina al enviar el formulario
  //uuidv4 es una dependencia para crear id al azar todos distintos

  const manejarEnvio = e =>{
    e.preventDefault()
    const tareaNueva ={
      id:uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
  }
  //on subumit es el evento para enviar formulario es el estandar
  return(
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input 
        className="tarea-input"
        type='text'
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
    )
}

export default TareaFormulario;
