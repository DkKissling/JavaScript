import { info } from "autoprefixer";
import React from "react";
import {Card1} from "../components/card";
import MySql from "../imagenes/MySql.png"
import Boostrap from "../imagenes/boostrap.png"
import CssHtml from "../imagenes/CssHtml.png"
import JavaScript from "../imagenes/JavaScript.png"
import Lua from "../imagenes/Lua.png"
import Next from "../imagenes/Next.png"
import RectLogo from "../imagenes/React.png"
import Tallwind from "../imagenes/Tallwind.png"


function Skills(){

  return(
    <div className="m-20">
      <div className=" flex text-5xl justify-center pb-10"> Programming Languages & Frameworks most used</div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:col-1 gap-3 ">
            <Card1
            image={JavaScript} 
            Num="5"
            Name="JavaScript"
            />
            <Card1
            Num="5"
            image={CssHtml} 
            Name="CSS and HTML"
            />
            <Card1
              Num="3"
              image={Lua} 
              Name="Lua"
              />
            <Card1
            Num="3"
            image={MySql} 
            Name="MySql"
            />  
          <Card1
            Num="4"
            image={Boostrap} 
            Name="Boostrap"
            />

          <Card1
            Num="4"
            image={RectLogo} 
            Name="React"
            />
        <Card1
          Num="3"
          image={Next}
          Name="Next" 
          />
        <Card1
          Num="4"
          image={Tallwind}
          Name="Tallwind" 
          />
      </div>
    </div>
  )
}

export default Skills;

//grid-col cantidad de columnas horizontal
//gap espacio entre cada columna
//spam para decir cuanto ocupa la columna
//start es donde comienza la columna y donde termina
//row es cantidad de filas vertical
//row-span-xx es cantidad de filas que va a ocupar

