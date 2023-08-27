const Routes = require("express")
const router = new Routes()
const userController = require("../controllers/userController")

router.get("/login", userController.login)

router.post("/create", userController.create)

router.post("/enterRoom", userController.enterRoom)

router.post("/roomsUser", userController.roomsUser)

router.post("/cleanMarks", userController.cleanMarks)

router.get("/marks", (req, res) => {
    return res.json({message: 123})
})

router.post("/setMarks", userController.setMarks)

module.exports = router