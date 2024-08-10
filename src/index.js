const express = require("express");
const v1ClientRouter = require("./V1/routes/clients")

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.use("api/v1/clients", v1ClientRouter)

app.listen(PORT, () => { 
    console.log(`server listening on port ${PORT}`)
});