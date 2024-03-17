const express = require('express');
const app = express();


app.use(express.static('public'));


app.get('/example1', (req,res) => {
    res.sendFile(__dirname + "/public/iframe-website1.html");
})

app.get('/example2', (req,res) => {
    res.sendFile(__dirname + "/public/iframe-website2.html");
})

const port = process.env.port || 5011;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})