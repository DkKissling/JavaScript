const { resolve } = require("mathjs");

function ordenarProducto (producto){
  return new Promise((resolve, reject)=>{
    console.log( `òrdenando ${producto} de freecodeCamp`)
    setTimeout(()=>{
      if (producto === 'taza'){
        resolve('ordenando taza de freecodecamp')
      }
      else{
        reject('producto no disponible en este momento')
      }
    },2000)
  });
}

function procesarPedido(respuesta){
  return new Promise((resolve)=>{
    console.log("procesando respuesta ")
    console.log(`la respuesta fue ${respuesta}`)
    setTimeout(()=>{
      resolve('gracias por su coompra, ')
    },4000)
  })
}


// ordenarProducto('lapiz')
//   .then(respuesta=>{
//     console.log('Respuesta recivida'),
//     console.log(respuesta)
//     return (procesarPedido(respuesta))
//   })
//   .then (respuestaProcesada=>{
//     console.log(respuestaProcesada)
//   })
//   .catch(error=>{
//     console.log(error)
//   })
    
  // esto se llama encadenamiento de promesas, porque con la promesa que retorna Ordenarproducto() retorna una promesa 
  //usamos esa promesa para dar resolve procesarPedido() y como esa funcion tambien retorna una promesa 
  //damos como resolve respuestaProcesada- y catch error en caso de reject 
  
async function realizarPedido(producto){
  try{
    const respuesta= await ordenarProducto(producto)
    console.log("respuesta recibida")
    const respuestaProcesada = await procesarPedido(respuesta)
    console.log(respuestaProcesada)
  }catch(err){
    console.log(err)
  }
}

realizarPedido('taza')
  //ESTO ES PARA CONTROLAR LOS PROCESOS ASINCRONOS YA QUE NO SABEMOS CUANTO TIEMPO VA A DURAR asi pero para poder usar 
  //asyc hay que usar await en las promesas.
 