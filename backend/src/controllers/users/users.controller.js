const UsersServices = require("../../services/users/services")
const usersServices = new UsersServices()

const userController = {
    getMe: async (req, res) => {
        try {
            const user = await usersServices.getMe(req.user)
            if (user) {
                res.status(200).json({
                    message: 'Usuario obtenido con exito',
                    data: user
                })
            } else {
                res.status(404).json({
                    message: 'No se a podido obtener el usuario',
                    data: null
                })
            }
        } catch (error) {
            res.status(404).json({
                message: 'A ocurrido un error',
                data: err
            })
        }
    }
}

module.exports = userController