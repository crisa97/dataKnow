// Importación de módulos necesarios
const express = require("express");
const cors = require('cors');

const v1ClientRouter = require("./V1/routes/clients");
const v1InvoiceRouter = require("./V1/routes/invoice");
const v1DocumentRouter = require("./V1/routes/documents");

const app = express();

// Configuración del puerto del servidor (3100 por defecto o el definido en el entorno)
const PORT = process.env.PORT || 3100;

// Middleware para habilitar CORS, permitiendo solicitudes desde http://localhost:3000
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware para parsear solicitudes con cuerpo JSON
app.use(express.json());

// Ruta principal para verificar que el servidor está en funcionamiento
app.get("/", (req, res) => {
    res.send("<h1>🐈 Programing Cat!</h1>");
});

// Enrutadores para manejar las rutas específicas de la API
app.use("/api/v1/clients", v1ClientRouter);
app.use("/api/v1/invoinces", v1InvoiceRouter)
app.use("/api/v1/documents", v1DocumentRouter)

// Inicio del servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
