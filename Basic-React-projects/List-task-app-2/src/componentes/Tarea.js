import React from "react";
import "../hojas-de-estilo/Tareas.css"
import {AiOutlineCloseCircle} from "react-icons/ai";


function Tarea({id, texto, completada, completarTarea, eliminarTarea}){
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
      onClick={()=> completarTarea(id)}
      // onclick necesita que su valor sea una funcion para eso usamos una funcion anonima
      // en este caso completar tarea, le pasamos el id a la funcion porque necesita saber 
      // cual es la tarea para marcar, ya que tiene una lista de tareas en USESTATE y no sabe 
      // cual es la que tiene que marcar por eso se lo damos con el ID . este valor se va a actualizar en completada o no segun se aprete
      className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-contenedor-icono"
        onClick={()=> eliminarTarea(id)}
        >
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  )
}

export default Tarea;