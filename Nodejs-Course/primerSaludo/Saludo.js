function saludar(Nombre){
  return `hola ${Nombre}`;
};

// module.exports.saludar = saludar;

module.exports = {
  saludar: saludar,
  //esto es para exportar varias funciones de un mismo archivo
}
