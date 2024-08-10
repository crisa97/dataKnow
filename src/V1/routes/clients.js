const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/clientController')

router
    .get('/', clientController.getAllClients)

    .get('/:clientId', clientController.getOneClients)

    .post("/:clientId", clientController.createClient)

    .patch(":clientId", clientController.updateClient)

    .delete("/:clientId", clientController.deleteCliente)

module.exports = router;