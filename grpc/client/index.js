const client = require('./client')

const path = require('path')
const express = require("express")
const bodyParser = require("body-parser")
const client = require('./client');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
// /TODO TO EXPOSE REST CALL
// WHICH

app.get("/",(req, res) => {
    client.getAll(null, (err, data) => {
        res.send(data.customers)
    })
})

app.post("/create",(req, res) => {

})

app.post("/update",(req, res) => {

})

app.post("/delete",(req, res) => {

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`client is running on port ${PORT}`);
})