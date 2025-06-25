const myql2 = require('mysql2')

const database = myql2.createConnection({
    host : 'localhost',
    user:'root',
    password:'123456',
    database: 'laAntonia'
})

database.connect((err) =>{
    if(err) throw err
    console.log('bd conectada')
})
 

module.exports = database
