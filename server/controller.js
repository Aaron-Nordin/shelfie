module.exports = {
    getItems:  (req,res) => {
        console.log("backend")
        const db = req.app.get('db')
        db.get_inventory().then(allproducts => {
            res.status(200).send(allproducts)
        }).catch( err => {
            res.sendStatus(500)
        })
    },
    createItem: async (req,res) =>{
        const db = req.app.get('db')
        let createdProduct = await db.create_product(req.body).catch(err =>{
            res.sendStatus(500)
        })
        res.status(201).send(createdProduct)
    }
}