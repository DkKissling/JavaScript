// const curso = require ('./curso.json')

// console.log(curso)

// //para sacar los valores del objeto json ussamos las propiedades del objeto ejemplo

// console.log(curso.titulo)


//-----------------------------------------------------------------

//PARA TRASNFORMAR UNA CADENA DE CARACTERES EN JSON USAMOS 

let infocurso={
  "titulo":"Aprender Node.js",
  "numVisitas": 4514,
  "numLikes":1341,
  "temas":[
    "Javascript",
    "Nodejs"
  ],
  "esPublico":true
}

let infoCusoJSON= JSON.stringify(infocurso)//con esto transformamos la variable en archivo json

//--------------------------------------------------------------------------------

//PARA HACER LO CONTRARIO:

infoCursoObjeto=JSON.parse(infoCusoJSON)// con esto transformamos un string json a objeto js

console.log(infoCusoJSON,infoCursoObjeto)