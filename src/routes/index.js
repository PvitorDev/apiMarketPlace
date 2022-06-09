const express = require('express')
const products = require("./productRoutes.js")
const sellers = require("./sellerRoutes")
const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send("API MARKETPLACE")
    })
    app.use(
        express.json(),
        products,
        sellers
    )
}

module.exports = routes