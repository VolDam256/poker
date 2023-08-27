const Routes = require("express")
const router = new Routes()
const routerController = require("../controllers/roomController")

router.post("/create", routerController.create)

router.get("/all", routerController.getAll)

router.get("/", routerController.check)

module.exports = router