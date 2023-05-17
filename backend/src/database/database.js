const mongodb = require('mongoose')
const { DB_URL } = require('../config/config')

const url_db = DB_URL
module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongodb.connect(url_db, {useUnifiedTopology: true,useNewUrlParser: true})
        .then(db => { 
            this.connection = db
            console.log('conexion exitosa')
        })
        .catch(err => console.log('error: ', err))
    }
}