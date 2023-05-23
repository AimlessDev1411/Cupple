const userModel = require('../../models/userSchema.model')

class UsersServices {
    async getMe(user) {
        try {
            return await this.getUserById(user.id)
        } catch (error) {
            console.log(error)
        }
    }

    async getUserById(id) {
        try {
            const user = await userModel.findById(id).exec()
            const userData = this.#parseObjectMeSend(user)
            return userData
        } catch (error) {
            console.log(error)
        }
    }

    #parseObjectMeSend(user) {
        const data = {}
        data.id = user._id.toString()
        data.email = user.email
        data.password = user.password
        data.name = user.name
        data.last_name = user.last_name
        data.user_name = user.user_name
        data.created_date = user.created_date
        data.date_user = user.date_user
        data.sex = user.sex

        return data
    }
}

module.exports = UsersServices