const client = require('../database/models').Client;

// Función para obtener todos los clientes con paginación
const getAllClients = async function(limit, offset) {
    try {
        const { count, rows } = await client.findAndCountAll({
            limit,
            offset
        });
        return { count, rows };
    } catch (error) {
        throw new Error(`Error al obtener los clientes: ${error.message}`);
    }
};

// Función para obtener un solo cliente por su ID
const getOneClient = async function (id) {
    try {
        return await client.findOne({ where: { id: id} });
    } catch (error) {
        throw new Error(`Error al obtener el cliente: ${error.message}`);
    }
};

// Función para crear un nuevo cliente
const createClient = async function (body) {
    try {
        return await client.create({
            nombreCliente: body.nombreCliente,
            tipoIdentificacion: body.tipoIdentificacion,
            numeroIdentificacion: body.numeroIdentificacion,
            observaciones: body.observaciones
        });
    } catch (error) {
        throw new Error(`Error al crear el cliente: ${error.message}`);
    }
};

// Función para actualizar un cliente existente por su ID
const updateClient = async function (id, body) {
    try {
       
        return await client.update({
            nombreCliente: body.nombreCliente,
            tipoIdentificacion: body.tipoIdentificacion,
            numeroIdentificacion: body.numeroIdentificacion,
            observaciones: body.observaciones
        }, { where: { id: id } });
    
    } catch (error) {
        throw new Error(`Error al actualizar el cliente: ${error.message}`);
    }
};

// Función para eliminar un cliente por su ID
const deleteCliente = async function (id) {
    try {
        const deletedCount = await client.destroy({ where: { id } });
        if (deletedCount === 0) {
            throw new Error(`Cliente con id ${id} no encontrado`);
        }
        return deletedCount;
    } catch (error) {
        throw new Error(`Error al eliminar el cliente: ${error.message}`);
    }
};

// Exportación de las funciones para ser utilizadas en otras partes de la aplicación
module.exports = {
    getAllClients,
    getOneClient,
    createClient,
    updateClient,
    deleteCliente
};
