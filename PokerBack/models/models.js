const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const Room = sequelize.define('room', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING, defaultValue: "numbers" },
})

const  User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING },
    mark: { type: DataTypes.INTEGER }
})

Room.hasMany(User)
User.belongsTo(Room)

module.exports = {
    User, Room
}