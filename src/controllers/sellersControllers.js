const sellers = require("../models/sellers.js")

class sellersController{
    static sellersList = (req,res)=>{
        sellers.find((err,sellers)=>{
            res.status(200).json(sellers)
        })
    }
    static sellersRegister = (req,res)=>{
        const seller = new sellers(req.body);
        seller.save((err)=>{
            if (err) {
                res.status(500).send({
                    message: `ERRO AO CADASTRAR VENDEDOR${err.message}`
                })
            } else {
                res.status(201).send(seller.toJSON())
            }
        })
    }
}

module.exports = sellersController