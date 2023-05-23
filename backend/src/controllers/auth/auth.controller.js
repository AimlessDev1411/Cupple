const authServices = require('../../services/auth/service')
const HandleAuth = require('../../helpers/HandleAuth')

const service = new authServices()
const handleAuth = new HandleAuth()

const AuthController = {
    createUser: async (req, res) => {
        try {
            const exist = await service.findUserByEmail(req.body.email)

            if (exist) {
                res.status(404).json({
                    message: 'El email ya a sido registrado',
                    data: null
                })
                return
            }

            const user = await service.createNewUser(req.body)

            if (user) {
                res.status(201).json({
                    message: 'Usuario creado con exito',
                    data: user
                })
                return
            } else {
                res.status(404).json({
                    message: 'A ocurrido un error al crear el usuario',
                    data: null
                })
                return
            }
        } catch (error) {
            console.log(error)
        }
    },

    login: async (req, res) => {
        try {
            const exist = await service.findUserByEmail(req.body.email)
            if (exist) {
                const password = await handleAuth.verifyPassword(req.body.password, exist.password)

                if (!password) {
                    res.status(404).json({
                        message: 'Email o contraseña no son correctos',
                        data: null
                    })
                }

                if (password && exist) {
                     
                    const token = await service.login(req.body.email)

                    if (token) {
                        res.status(201).json({
                            message: 'Token obtenido con exito!!!',
                            data: {
                                access_token: token
                            }
                        })
                    }

                    if (!token) {
                        res.status(404).json({
                            message: 'A ocurrido un error al inciar sesion',
                            data: null
                        })
                    }
                } 
            }

            if (!exist) {
                res.status(404).json({
                    message: 'Email o contraseña no son correctos',
                    data: null
                })
            }
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = AuthController