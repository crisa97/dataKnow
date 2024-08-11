const express = require('express');
const router = express.Router();
const invoiceController = require('../../controllers/invoiceController')

router
    .get('/', invoiceController.getAllInvoice)

    .get('/:id', invoiceController.getOneInvoice)

    .post("/", invoiceController.createInvoice)

    .put("/:id", invoiceController.updateInvoice)

    .delete("/:id", invoiceController.deleteInvoice)

module.exports = router;