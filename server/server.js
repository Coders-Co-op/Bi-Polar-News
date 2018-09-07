require("dotenv").config();


const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    massive = require("massive");
    ArtCtrl = require('./controllers/articles_controller')
    PlCtrl = require('./controllers/poll_controller');

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// MIDDLEWARE
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

// ENDPOINTS
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

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Connected to DB");

    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}... or are we...?`);
    })
})

