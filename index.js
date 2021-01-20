const express = require('express')
const path = require('path')
const todoRoutes = require('./routes/todo')
const sequelize = require('./utils/database')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/todo', todoRoutes)

app.use((req, res) => {
    res.sendFile('/index.html')
})

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

start()
