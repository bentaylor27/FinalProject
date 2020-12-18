const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


//middleware
app.use(express.json());

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors())

app.use(
    session({
        secret: 'pop',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 3600000
        }
    })
)

//mongoose
mongoose.connection.on('error', err => console.log(err.message + ' THIS IS THE ERROR MESSAGE'))
mongoose.connection.on('disconect', () => console.log('mongo has disconnected'))

mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose')
})


//listening port
app.listen(PORT, ()=> {
    console.log('listening on port ', PORT)
})