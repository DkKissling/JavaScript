var mysql = require('mysql')

var conexion = mysql.createConnection(
  {
    host: 'localhost',
    database: 'cursos',
    user:'root',
    password:'Kissling3077'
  }
);

conexion.connect(function (error){
  if(error){
    throw error;
  }else{
    console.log('conexion exitosa')
  }
})

//consultas a la db: 

conexion.query('SELECT * from usuarios', function(error,results,fields){
  if(error)
  throw error;

  results.forEach(result => {
    console.log(result)
    
  });
})

conexion.end();

