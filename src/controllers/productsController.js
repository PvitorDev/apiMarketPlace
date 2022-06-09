const products = require("../models/products.js")

class productsController{
    static productsList = (req, res) => { //Listar Bancos GET
        products.find()
        .populate('nome')
        .exec((err, products) => {
            res.status(200).json(products)
        })
    }
    static productsRegister = (req, res) => { //Registrar Banco POST
        let product = new products(req.body);

        product.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `ERRO AO CADASTRAR BANCO ${err.message}`
                })
            } else {
                res.status(201).send(product.toJSON())
            }
        })
    }

    
  
}

module.exports = productsController;