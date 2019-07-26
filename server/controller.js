module.exports = {
  getItems: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_inventory()
      .then(allproducts => {
        res.status(200).send(allproducts);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  //   createItem: async (req, res) => {
  //     const dbInstance = req.app.get("db");
  //     let createdProduct = await dbInstance
  //       .create_product(req.body)
  //       .catch(err => {
  //         res.sendStatus(500);
  //       });
  //     res.status(201).send(createdProduct);
  //   },
  createItem: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .create_product(req.body)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({
            errorMessage:
              "Create? nah"
          });
        console.log(err);
      });
  },
  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_product(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Delete? nah"
        });
        console.log(err);
      });
  }
};
