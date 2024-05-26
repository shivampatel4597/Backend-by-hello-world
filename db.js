const mongoose = require('mongoose')

// define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'  //replace hotels with your database name

// set up mongoose connection
mongoose.connect(mongoURL)
.then(()=> console.log("connected to mongodb"))
.catch(err => console.error("failed to connect to mongodb", err));


mongoose.connection.on('connected', ()=>{
    console.log("mongodb is connected")
})
mongoose.connection.on('error', err => console.log("error is", err))

mongoose.connection.on('disconnected', ()=>console.log("mongodb is disconnected"))
