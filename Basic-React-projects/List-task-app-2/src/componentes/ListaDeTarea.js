import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTarea.css'
import Tarea from "./Tarea";

function ListaDeTarea(){
  //INICIALMENTE SE PASA UN ARRAY VACIO PORQUE ES LO QUE 
  //QUEREMOS .. QUE COMIENCE LA LISTA VACIA
  
  const [tareas, setTareas]= useState([]);


  //la tare
  const agregarTarea = tarea =>{
    //con esto comprobamos si la tarea no esta vacia
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim()
      //con esto estamos creando un nuevo arreglo de tareas y agregamos los nuevos valores al principio del array
      //tomando como dato las tareas anteriores. 
      const tareasActualizadas=[tarea,...tareas]
      setTareas(tareasActualizadas)
    }
  }
  //con esta funcion hacemos que el componente lista de tareas sepa que se apreto en 
  //TAREAFORMULARIO ya que el boton de AGREGAR TAREA esta en el componente TareaFormulario
  //por eso necesitamos que se comuniquen



  
  const eliminarTarea = id =>{
    // esta forma de filtrar solo funciona en react ...el metodo filtrar es como como un if 
    // que en caso de que sea igual solamente se va a modificar... una vez modificada actualizamos lista nuevamente
    //metodo filter se pasa el array se pasa la nombre de la variable que necesito saber la condicon con la cual discrimino y con que lo discrimino
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas);
  }
  //esta funcion la paso como props para que se pueda comunicar con el archivo Tarea.js


  const completarTarea = id => {
    const tareasActualizadas= tareas.map (tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas)
  }


  return(
    <>
    {/* ponemos como props onsubmit ya que es un estandar para decir que ahi se va a pasar
    el formulario de la tarea creada  */}
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className="tarea-lista-contenedor"> 
        {/* este div nos va a servir para tener una 
        lista de componentes */}
        {
          // el metodo map permite generar un componente por cada elemento del array
          tareas.map((tarea)=> 
          <Tarea
          // el key es para que react pueda identificar el elemento unico en la lista sino sale error porque no sabe el orden que hay que acomodarlos cuando se actualiza
            key={tarea.id}
            id={tarea.id}
            texto= {tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />)
        }
      </div>
      {/* la funcion map que es un metodo que va a pasar una por una 
      las tareas como argumento y va a realizar lo que querramos 
      en este caso hacer un componente con cada una 
      cada una de las tareas va a ser representado como arreglo en el array */}
    </>
  )
}

//si no quieres incorporar nuevos div para un return
//puedo usar etiquetas vacias ..se llaman FRACMENTOS
 


export default ListaDeTarea;