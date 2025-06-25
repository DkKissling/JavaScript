import React from "react";
import backgroundHome from "../imagenes/avatar1.png"

export default function Home(){
  return(
    <div className=" grid grid-row-2 lg:grid-cols-6 md:grid-cols-1 gap-4 sm:col-1 gap-3" 
      style=
        {{ backgroundImage:  `url("${backgroundHome}")`,
        height: '100%',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX:'right',
        minHeight:'500px'
        }}>
          
      
      <div className="col-span-2 row-span-2 col-start-2 mt-10"> 
        <h2 className="text-4xl"	>Hello, it's me</h2>
        <h1 className="text-6xl m-1">Guillermo Daniel Kissling </h1>
        <p className="text-xl"> Enthusiastic young person with an interest in the web application development industry. Currently part of the TopTive team as a junior programmer.</p> 
        <p className="text-xl">Studying the last year of the Technical Degree in Software Development at the prestigious Technological Institution of Rio Cuarto.</p>  
       </div>
    </div>
  )
}

