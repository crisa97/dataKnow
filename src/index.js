const express = require("express");
const v1ClientRouter = require("./V1/routes/clients");

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.use("/api/v1/clients", v1ClientRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
