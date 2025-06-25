import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Skills from "../pages/Skills"
import Contact from "../pages/Contact"
import Works from "../pages/Works"
import Home from "../pages/Home";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);


  //empezamos creando un estado de navegador para poder controlar la condicion del menu 
  //con respecto a las pantallas que tenemos

  return (
//las clases que designamos son con respecto a nuestra pagina utilizando el container
//modificamos el tamaño del contenedor 
  <BrowserRouter>
        <nav className="w-full shadow text-white px-10 bg-transparent	">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
    {/* vamos a crear un div para el logo con una etiqueta a para que podamos designarle una funcion  
    de volver a la home  */}
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      <h2 className="text-2xl font-bold">LOGO</h2>
                <div className="md:hidden">
    {/* para el boton usamos el control de useState. usamos el evento onClick para hacer una funcion anonima
    para cambiarle el estado de navbar en caso de que este verdadero se cambie a falso */}
                  <button
                      className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                  >
    {/* para el condicional navbar devolvemos dos etiquetas svg para que se forme la imagen burger del
    menu -- la primera es el menu cerrado y el segundo es el menu abierto */}
                  {navbar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                  ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                  )}
                  </button>
                </div>
              </div>
            </div>
            <div>
    {/* en el ultimo div manejamos la clase con un condicional. en caso que sea verdadero es block en caso 
    de ser falsa es hidden haciendo que el menu sea una burger */}
              <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                      navbar ? "block" : "hidden"
                  }`}
              >
    {/* en el ultimo div ponemos el coontenido que queremos incorporar en el navbar en forma de lista*/}
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className=" hover:text-blue-600">
                    <NavLink to= '/'>Home</NavLink>
                  </li>
                  <li className=" hover:text-blue-600">
                  < NavLink to= '/skill'>Skill</NavLink>
                  </li>
                  <li className=" hover:text-blue-600">
                    <NavLink to= '/works'>Works</NavLink>
                  </li>
                  <li className=" hover:text-blue-600">
                    <NavLink to= '/contact'>Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </nav>
        <Routes>
          <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/skill" element={<Skills />} />            
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}

