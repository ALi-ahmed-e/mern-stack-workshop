const dot = require('dotenv')
dot.config()
const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/connectToDB');



const app = express();
const PORT = 8000;

app.use(cors());

app.use(express.json());

connectToDB()

// app.get('/', (req, res) => {
//     console.log(req)
//     return res.json({ message: 'Hello from server' })
    

// })

app.use('/api/notes',require('./routes/notes'));


app.listen(PORT, () => {
    console.log('server started on port ', PORT)
})