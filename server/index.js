const express = require("express");
const app = express();
const massive = require("massive");
const controller = require("./controller");
require("dotenv").config();

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.get('/api/inventory', controller.getItems)
app.post('/api/inventory', controller.createItem)
app.delete('/api/inventory/:id', controller.delete)



massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    app.listen(SERVER_PORT, () =>
      console.log(`Server ${SERVER_PORT} is watching you`)
    );
  })
  .catch(err => console.log(err, "cannot connect to database"));
