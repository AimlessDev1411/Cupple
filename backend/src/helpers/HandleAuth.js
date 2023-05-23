const jwt = require('jsonwebtoken');
const { JWT_SECRETE } = require('../config/config')
const dencryptPassword = require('./dencryptPassword')

class HandleAuth {
    token = null

    async createToken(userData) {
        jwt.sign({
            email: userData.email,
            userName: userData.user_name,
            lastName: userData.last_name,
            name: userData.name,
            id: userData._id.toString()
        }, JWT_SECRETE, async (err, token) => {
            if (err) {
                console.log(err)
            } else {
               this.token = await token
            }
        })

        return this.token
    }

    async verifyPassword(passwordPlane, passwordEncryp) {
        const passwordDescrypt = dencryptPassword(passwordEncryp)
        if (passwordPlane === passwordDescrypt) return true
        if (!passwordPlane === passwordDescrypt) return false
    }

    verifyToken(req, res, next) {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]

        if (token == null) return res.status(404).json(
            {
                message: 'Not authenticated',
                data: null
            }
        );
        
        jwt.verify(token, JWT_SECRETE, (err, user) => {
            if (err) return res.sendStatus(403).json(
                {
                    message: 'Not authenticated',
                    data: err
                }
            );
            req.user = user;
            next();
        });
    }
}

module.exports = HandleAuth