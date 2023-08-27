const {Room} = require("../models/models");

class RoomController {
    async create (req, res) {
        const {name} = req.body
        const newRoom = await Room.create({name})
        return res.json({newRoom})
    }

    async getAll (req, res) {
        const rooms = await Room.findAll();
        return res.json({rooms})
    }

    async check (req, res) {
        const { id } = req.query;
        if(!id) {
            return res.json({ message: "give ID" })
        }
        return res.json({id})
    }
}

module.exports = new RoomController()