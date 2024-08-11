const express = require("express");
const v1ClientRouter = require("./V1/routes/clients");
const v1InvoiceRouter = require("./V1/routes/invoice")

const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3100;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.use("/api/v1/clients", v1ClientRouter);
app.use("/api/v1/invoinces", v1InvoiceRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
