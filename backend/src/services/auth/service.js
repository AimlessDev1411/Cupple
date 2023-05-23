const userSchema = require('../../models/userSchema.model')
const encryptPassword = require('../../helpers/encryptPassword')
const sendEmail = require('../../helpers/sendConfirmationEmail')
const HandleAuth = require('../../helpers/HandleAuth')
const handleAuth = new HandleAuth()

class Service {
    async findUserByEmail(email) {
        try {
            const find = await userSchema.findOne({ email: email }).exec()
            return find
        } catch (error) {
            console.log(error)
        }
    }

    async createNewUser(payload) {
        try {
            const time = Date.now();
            const today = new Date(time);
            const { email, password, name, last_name, user_name, date_user, sex } = payload
            const user = new userSchema({ 
                email: email, 
                password: encryptPassword(password), 
                name: name, 
                last_name: last_name, 
                user_name: user_name,
                date_user: date_user,
                sex: sex,
                created_date: today.toISOString(),
                confirmed: false
            })

            const userData = await user.save()

            sendEmail.welcome(userData.email)

            return userData
        } catch (error) {
            console.log(error)
        }
    }

    async login(email) {
        try {
            const user = await this.findUserByEmail(email)

            const token = await handleAuth.createToken(user)

            return token

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Service