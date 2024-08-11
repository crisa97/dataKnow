const express = require("express");
const v1ClientRouter = require("./V1/routes/clients");
const v1InvoiceRouter = require("./V1/routes/invoice")
const v1DocumentRouter = require("./V1/routes/documents")

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
app.use("/api/v1/documents", v1DocumentRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
