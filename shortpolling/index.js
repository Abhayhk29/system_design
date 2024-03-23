const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.get('/getData', (req, res) => {
    res.send({
        data : "initial data"
    })
})


app.get('/updatedData', (req,res) => {
    data = "updated data";
    res.send({
        data
    })
})


const port = process.env.PORT || 5011;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});