const {User} = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class UserController {
    async login (req, res) {
        const token = jwt.sign({id: "123"}, process.env.SECRET_TOKEN_KEY, {expiresIn: '24h'})
        return res.json({data: token})
    }

    async create (req, res) {
        const {name} = req.body
        const newUser = await User.create({name})
        return res.json({data: newUser})
    }

    setMarks (req, res) {
        const { id, mark } = req.body
        User.update({ mark }, {
            where: {
                id
            }
        }).then(() => User.findAll({
                where: {
                    id,
                }
        })).then(user => res.json({ message: user}))
    }

    enterRoom (req, res) {
        const { roomId, id } = req.body

        User.update({ roomId }, {
            where: {
                id,
            }
        }).then(() => User.findAll({
            where: {
                id,
            }
        })).then(user => res.json({ message: user}))
    }

    roomsUser(req, res) {
        const { roomId } = req.body;

        User.findAll({
            where: {
                roomId,
            }
        }).then(user => res.json({ users: user}))
    }

    cleanMarks(req, res) {
        const { roomId } = req.body;

        User.update({ mark: 0 }, {
            where: {
                roomId
            }
        }).then(() => res.json({ message: "Sector clear"}))
    }
}

module.exports = new UserController()