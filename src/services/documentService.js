const Document = require('../database/models').Documento;

// Función para obtener todos los documentos
const getAllDocuments = async function () {
    try {
        return await Document.findAll();
    } catch (error) {
        throw new Error(`Error al obtener los documentos: ${error.message}`);
    }
};

// Función para obtener un documento por su ID
const getOneDocument = async function (id) {
    try {
        return await Document.findOne({ where: { id: id} });
    } catch (error) {
        throw new Error(`Error al obtener el documento: ${error.message}`);
    }
};

// Función para crear un nuevo documento
const createDocument = async function (body) {
    try {
        return await Document.create({
            tipoDocumento: body.tipoDocumento
        });
    } catch (error) {
        throw new Error(`Error al crear el documento: ${error.message}`);
    }
};

// Función para actualizar un documento existente por su ID
const updateDocument = async function (id, body) {
    try {
       
        return await Document.update({
            tipoDocumento: body.tipoDocumento
        }, { where: { id: id } });
    
    } catch (error) {
        throw new Error(`Error al actualizar el documento: ${error.message}`);
    }
};

// Función para eliminar un documento por su ID
const deleteDocument = async function (id) {
    try {
        const deletedCount = await Document.destroy({ where: { id } });
        if (deletedCount === 0) {
            throw new Error(`documento con id ${id} no encontrado`);
        }
        return deletedCount;
    } catch (error) {
        throw new Error(`Error al eliminar el documento: ${error.message}`);
    }
};

// Exportación de las funciones para ser utilizadas en otras partes de la aplicación
module.exports = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};
