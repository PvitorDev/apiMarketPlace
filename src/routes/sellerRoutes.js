const express = require('express')
const sellersController = require("../controllers/sellersControllers")

const router = express.Router()

router
    .get("/vendedor",sellersController.sellersList)
    .post("/vendedor",sellersController.sellersRegister)



module.exports = router