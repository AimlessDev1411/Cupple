const app = require('./src/app')
const { PORT } = require('./src/config/config')
const Database = require('./src/database/database')

const port = PORT
Database.connect()

app.listen(port, () => {
    console.log("Server listening in port: " + port)
})