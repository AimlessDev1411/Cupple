const dotenv = require('dotenv')
dotenv.config({
  path: '.env'
})

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/cupple',
  MAIL_USER: process.env.MAIL_USER || "cuppleteam@gmail.com",
  MAIL_PASSWORD: process.env.MAIL_PASSWORD || "kvmnrizfzyyeqjaa",
  JWT_SECRETE: process.env.JWT_SECRETE || 'cuppleteamisthebest'
}