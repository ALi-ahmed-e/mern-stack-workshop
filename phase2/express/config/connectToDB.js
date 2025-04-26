const mongoose = require('mongoose');


const connectToDB = async () => {
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI)


    mongoose.connection.on('connected',()=>{
        console.log('Connected to DB')
    })
    

    mongoose.connection.on('error',(err)=>{
       console.log('Error connecting to DB',err)
    })

    

    mongoose.connection.on('disconnected',()=>{
        console.log('Disconnected from DB')
    })

    






}


module.exports = connectToDB