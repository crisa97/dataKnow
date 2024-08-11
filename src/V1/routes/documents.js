const express = require('express');
const router = express.Router();
const documentController = require('../../controllers/documentController')

router
    .get('/', documentController.getAllDocuments)

    .get('/:id', documentController.getOneDocuments)

    .post("/", documentController.createDocument)

    .put("/:id", documentController.updateDocument)

    .delete("/:id", documentController.deleteDocument)

module.exports = router;