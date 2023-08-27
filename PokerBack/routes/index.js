const Routes = require("express")
const router = new Routes()
const roomRouter = require("./room")
const userRouter = require("./user")

router.use("/room", roomRouter)
router.use("/user", userRouter)

module.exports = router