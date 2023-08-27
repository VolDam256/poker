class wsController {
        async connectionHandler(ws, req) {
            ws.on('message', (msg) => {
                const parsedMsg = JSON.parse(msg)
                switch (parsedMsg.method) {
                    case "connection":
                        console.log("connection")
                        break
                    case "sendMark":
                        console.log("sendMark")
                        break
                }
            })
        }

        connect(ws, msg) {
            ws.id = msg.id
            this.broadcastConnection(ws, msg)
        }

        broadcastConnection(ws, msg) {
            ws.id = msg.id
            broadcastConnection(ws, msg)
        }

}

module.exports = new wsController()