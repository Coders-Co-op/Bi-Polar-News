require("dotenv").config()

const express = require("express"),
    bodyParser = require("body-parser"),
    massive = require("massive");

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

// MIDDLEWARE
app.use(bodyParser.json())

// ENDPOINTS

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)

    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}... or are we...?`);
    })
})

