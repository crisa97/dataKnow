const Document = require('../database/models').Documento;

const getAllDocuments = async function () {
    try {
        return await Document.findAll();
    } catch (error) {
        throw new Error(`Error al obtener los documentos: ${error.message}`);
    }
};

const getOneDocument = async function (id) {
    try {
        return await Document.findOne({ where: { id: id} });
    } catch (error) {
        throw new Error(`Error al obtener el documento: ${error.message}`);
    }
};

const createDocument = async function (body) {
    try {
        return await Document.create({
            tipoDocumento: body.tipoDocumento
        });
    } catch (error) {
        throw new Error(`Error al crear el documento: ${error.message}`);
    }
};

const updateDocument = async function (id, body) {
    try {
       
        return await Document.update({
            tipoDocumento: body.tipoDocumento
        }, { where: { id: id } });
    
    } catch (error) {
        throw new Error(`Error al actualizar el documento: ${error.message}`);
    }
};

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

module.exports = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};
