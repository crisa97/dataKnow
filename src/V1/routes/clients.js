const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/clientController')

router
    .get('/', clientController.getAllClients)

    .get('/:id', clientController.getOneClients)

    .post("/", clientController.createClient)

    .put("/:id", clientController.updateClient)

    .delete("/:id", clientController.deleteCliente)

module.exports = router;