const express = require('express');
const mysql= require('mysql')
const mycon = require('express-myconnection')

const routes= require('./routes')

const app= express();

const dboptions=  {
  host: 'localhost',
  port: '3306',
  user:'root',
  password:'Kissling3077',
  database:'library'
}


app.use (mycon(mysql,dboptions, 'single'))

app.set('port', process.env.PORT || 3000 )

app.use(express.json());


routes.get('/',(req,res)=>{
  res.send("Hello Word")
})

app.use('/api', routes)

app.listen(app.get('port'),()=>{
  console.log("server runining", app.get('port'))
})