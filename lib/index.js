require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db')
const Routes = require('./Routes/route')
const {CreateUser,GetUser,DeleteUser,UpdateUser} = require('./Views/User.views')

//DatabaseConnection 

connection()
//UpdateUser()
//DeleteUser()
//GetUser()
//CreateUser("ali",32,"male")
//middleware
app.use(express.json())
app.use(cors())
app.use(Routes)


app.listen(8000,()=>{console.log("project is working")})