require("dotenv").config()

const express = require("express"),
    bodyParser = require("body-parser"),
    massive = require("massive");

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

// MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// ENDPOINTS
app.get("/api/onload", async (req, res) => {
    let db = app.get("db");
    let result = await db.bpn_junction.test_bpn_query();
    res.status(200).send(result);
})

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Connected to DB");
    
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}... or are we...?`);
    })
})

