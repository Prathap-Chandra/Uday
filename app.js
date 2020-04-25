// https://git.heroku.com/calm-brushlands-88366.git

const express = require('express')
const app = express();

const subtraction = require("./routes/subtraction");

app.use(express.json());

app.get("/", (req,res) => {
    // res.status(200).json({
    //     message: "home page"
    // })
    res.send('<h1>Hello</h1>')
})

app.use("/v1.0/maths/subtraction/",subtraction);
app.get("*", function(req, res) {
    res.status(200).json({
        message: "oiedsgajofdg"
    })
});

module.exports = app;