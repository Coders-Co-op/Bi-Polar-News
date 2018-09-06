require("dotenv").config();


const express = require("express"),
    bodyParser = require("body-parser"),
<<<<<<< HEAD
    cors = require('cors'),
    massive = require("massive");
=======
    massive = require("massive")
    ArtCtrl = require('./controller/Articles')
    PlCtrl = require('./controller/Poll');
>>>>>>> master

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// MIDDLEWARE
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

// ENDPOINTS
<<<<<<< HEAD
app.get("/api/onload", async (req, res) => {
    let db = app.get("db");
    let result = await db.bpn_junction.test_bpn_query();
    res.status(200).send(result);
})
app.get("/api/article/:topics", async (req, res) => {
    let db = app.get("db");
    let { topics } = req.params
    let result = await db.articles.query_topics(topics)
    res.status(200).send(result);
})
=======
//Get 5 Random articles Onload
app.get("/api/onload",ArtCtrl.art_onload)
//Get 5 random articles based on user input
app.get("/api/article/:topics",ArtCtrl.art_topics)
//Get topics and subtopics
app.get("/api/topics",ArtCtrl.get_topics)
//Get Poll results
app.get('/api/poll/results',PlCtrl.poll_res)
//Add to Poll results
app.post('/api/poll/submit',PlCtrl.poll_submit)
>>>>>>> master

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Connected to DB");

    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}... or are we...?`);
    })
})

