const express = require("express")
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
    console.log(req)
    res.send("<h1>Home</h1>")
})

app.get("/contact", function (req, res) {
    console.log(req)
    res.send("<h1>Contact</h1>")
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});


