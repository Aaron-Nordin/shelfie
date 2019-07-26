const express = require("express");
const app = express();
const massive = require("massive");
const controller = require("./controller");
require("dotenv").config();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);

    app.listen(SERVER_PORT, () =>
      console.log(`Server ${SERVER_PORT} is watching you`)
    );
  })
  .catch(err => console.log(err, "cannot connect to database"));
