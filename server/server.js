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
app.get("/api/article/:topics", async (req, res) => {
    let db = app.get("db");
    let { topics }=req.params
    let result = await db.articles.query_topics(topics)
    res.status(200).send(result);
})

app.get("/api/topics", async (req, res) => {
    let db = app.get("db");
    let result = await db.topics.get_all_topics();
    res.status(200).send(result);
})

app.get('/api/poll/results', async (req,res)=>{
    let db = app.get('db')
    let pollData = await db.poll.poll_test_query()
    res.status(200).send(pollData)
})

app.post('/api/poll/submit', async (req,res)=>{
    let db = app.get('db')
    let {art1_id, art2_id, art1_res, art2_res, surprised} = req.body
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()+1 //January is 0!
    let yyyy = today.getFullYear()
    if(dd<10) {
    dd = '0'+dd
    } 
    if(mm<10) {
    mm = '0'+mm
    } 
    today = mm + '/' + dd + '/' + yyyy    
    let pollPost = await db.poll.poll_insert([art1_id, art2_id, art1_res, art2_res, surprised,today]).catch(err=>console.log(err))
    res.status(201).send(pollPost)
})

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Connected to DB");
    
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}... or are we...?`);
    })
})

