// Importación de módulos necesarios
const express = require('express');
const router = express.Router();
const documentController = require('../../controllers/documentController')

// Definición de rutas para operaciones CRUD sobre documentos
router
    .get('/', documentController.getAllDocuments)

    .get('/:id', documentController.getOneDocuments)

    .post("/", documentController.createDocument)

    .put("/:id", documentController.updateDocument)

    .delete("/:id", documentController.deleteDocument)

// Exportación del enrutador para su uso en otras partes de la aplicación
module.exports = router;