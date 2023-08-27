require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const cors = require('cors')
const models = require("./models/models")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const PORT = process.env.PORT || 5000

const app = express()
// const WSServer = require("express-ws")(app)
// const aWss = WSServer.getWss()

/*app.ws('/', (ws, req) => {
    ws.on('message', (msg) => {
        const parsedMsg = JSON.parse(msg)
        switch (parsedMsg.method) {
            case "connection":
                connectionHandler(ws, parsedMsg)
                break
            case "sendMark":
                console.log("sendMark")
                break
        }
    })
})
*/
app.use(cors())
app.use(express.json())
app.use("/api", router)
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()