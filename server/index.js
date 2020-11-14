require('dotenv').config();

const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env
const auth = require('./controller')


const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db',db)
    console.log("Life is good, you know what I mean")
}).catch( err => console.log(err))

//Endpoints
app.post('/api/auth/register', auth.register)

app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT} yay`))