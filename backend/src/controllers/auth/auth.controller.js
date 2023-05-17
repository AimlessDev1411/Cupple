const userSchema = require('../../models/userSchema.model')
const encryptPassword = require('../../helpers/encryptPassword')

const sendEmail = require('../../helpers/sendConfirmationEmail')

const AuthController = {
    createUser: async (req, res) => {

        const find = await userSchema.findOne({email: req.body.email}).exec()
        if(find !== null){
            res.status(404).json({
                message: "El email ya existe",
                data: null
            })
        } else {
            const time = Date.now();
            const today = new Date(time);
            const { email, password, name, last_name, user_name, date_user, sex } = req.body
            const userModel = new userSchema({ 
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

            const user = await userModel.save()

            sendEmail.welcome(user.email)

            res.status(201).json({
                message: 'Usuario creado con exito',
                data: user
            })
        }

        
    },
    login: async (req, res) => {

    }
}

module.exports = AuthController