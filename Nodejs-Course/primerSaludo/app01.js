//  const {saludar} = require("./Saludo.js")
// //esto es la forma para exportar varias funciones dentro de un mismo archivo 
// solo se va a exportar la funcion saludar del archivo


// console.log(saludar ("DANIEL"));

// console.warn("para advertir alguna consecuencia")

// console.error(new Error("para especificar donde ocurrio el error"))



//------------------------------------------./
//MODULO OS

const os = require('os');
//tipo de sistema operativo que maneja
console.log (os.type())
//directorio principal
console.log(os.homedir())
//info de usuario 
console.log(os.userInfo())

//-----------------------------------------------------/
//modulo Timers
//se va a esperar la cantidad de milisegundos que se va a esperar para que funcione la funcion
function mostrarTema(tema){
  console.log(`estoy aprendiendo ${tema}`)
}
setTimeout(mostrarTema, 1000, "node")

//se usa para ejecutar funciones asincronas en la proxima interaccion del ciclo de eventos
//basicamente despues del codigo sincrono

setImmediate(mostrarTema,"python")

console.log("despues de inmediate")

//sirve para ejecutar un codigo un nro infinito de veces cada un retraso especifico

setInterval(mostrarTema,1500, "java")

