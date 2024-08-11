const documentService = require('../services/documentService')

const getAllDocuments = async  function(req, res) {
    try {
        const allDocuments = await documentService.getAllDocuments();
        return res.status(200).json({ status: 200,  message: 'Documents:', data: allDocuments });
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al obtener los documentos.', error: error.message });
    }
};

const getOneDocuments = async function(req, res){
    try {
        const document  = await documentService.getOneDocument(req.params.id)
        if (document ) {
            return res.status(200).json({ status: 200, message: 'documentos por id:', data: document  });
        } else {
            return res.status(404).json({ status: 404, message: 'documento no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al obtener el documento por ID.', error: error.message });
    }
}

const createDocument = async function(req, res) {
    try {
        const createdDocument = await documentService.createDocument(req.body);
        return res.status(201).json({ status: 201, message: 'documento creado satisfactoriamente', data: createdDocument });
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al crear el documento.', error: error.message });
    }
};

const updateDocument = async function(req, res) {
    try {
        const idDocument = req.params.id; 
        if (idDocument) {
            const updatedDocument = await documentService.updateDocument(idDocument, req.body);
            return res.status(200).json({ status: 200, message: 'documento actualizado satisfactoriamente', data: updatedDocument });
        } else {
            return res.status(404).json({ status: 404, message: 'documento no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al actualizar el documento.', error: error.message });
    }
};


const deleteDocument = async function(req, res) {
    try {
        const deletedDocument = await documentService.deleteDocument(req.params.id);
        if (deletedDocument) {
            return res.status(200).json({ status: 200, message: 'documento eliminado satisfactoriamente', data: deletedDocument });
        } else {
            return res.status(404).json({ status: 404, message: 'documento no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al eliminar el documento.', error: error.message });
    }
};

module.exports = {
    getAllDocuments,
    getOneDocuments,
    createDocument,
    updateDocument,
    deleteDocument
};