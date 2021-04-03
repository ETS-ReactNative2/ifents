const express = require('express')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(routes)
app.use(cors())
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

app.listen(3301, () => console.log("Server on"))