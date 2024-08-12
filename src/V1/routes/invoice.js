// Importación de módulos necesarios
const express = require('express');
const router = express.Router();
const invoiceController = require('../../controllers/invoiceController')

// Definición de rutas para operaciones CRUD sobre facturas
router
    .get('/', invoiceController.getAllInvoice)

    .get('/:id', invoiceController.getOneInvoice)

    .post("/", invoiceController.createInvoice)

    .put("/:id", invoiceController.updateInvoice)

    .delete("/:id", invoiceController.deleteInvoice)

// Exportación del enrutador para su uso en otras partes de la aplicación
module.exports = router;