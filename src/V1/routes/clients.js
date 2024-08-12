// Importación de módulos necesarios
const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/clientController')

// Definición de rutas para operaciones CRUD sobre clientes
router
    .get('/', clientController.getAllClients)

    .get('/:id', clientController.getOneClients)

    .post("/", clientController.createClient)

    .put("/:id", clientController.updateClient)

    .delete("/:id", clientController.deleteCliente)

// Exportación del enrutador para su uso en otras partes de la aplicación
module.exports = router;