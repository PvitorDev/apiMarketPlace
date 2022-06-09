const express = require("express")
const productsController = require("../controllers/productsController.js")

const router = express.Router()

router
    .get("/produtos",productsController.productsList)
    .post("/produtos", productsController.productsRegister)






module.exports = router