// Importación de los modelos 'Factura' y 'Client' desde la base de datos
const Invoice = require('../database/models').Factura;
const Client = require('../database/models').Client;

// Función para obtener todas las facturas con soporte de paginación y filtros
const getAllInvoice = async function(limit, offset, from, to, idCliente) {
    try {
        // Filtro para las fechas
        const dateFilter = from && to ? { createdAt: { [Op.between]: [from, to] } } : {};

        // Filtro para el cliente
        const clientFilter = idCliente ? { clientId: idCliente } : {};

        // Obtener facturas con paginación y filtros
        const { count, rows } = await Invoice.findAndCountAll({
            where: {
                ...dateFilter,
                ...clientFilter
            },
            limit,
            offset,
            include: [
                {
                    model: Client,
                    as: 'cliente', 
                }
            ]
        });

        return { count, rows };
    } catch (error) {
        throw new Error(`Error al obtener las facturas: ${error.message}`);
    }
};

// Función para obtener una factura específica por su ID
const getOneInvoice = async function (id) {
    try {
        return await Invoice.findOne({ where: { id: id} });
    } catch (error) {
        throw new Error(`Error al obtener el cliente: ${error.message}`);
    }
};

// Función para crear una nueva factura
const createInvoice = async function (body) {
    try {
        return await Invoice.create({
            idCliente: body.idCliente,
            fecha: body.fecha,
            nombreProducto: body.nombreProducto,
            precio: body.precio,
            valorDescuento: body.valorDescuento,
            iva: body.iva,
            valorTotal: body.valorTotal
        });
    } catch (error) {
        throw new Error(`Error al crear el cliente: ${error.message}`);
    }
};

// Función para actualizar una factura existente por su ID
const updateInvoice = async function (id, body) {
    try {
       
        return await Invoice.update({
            idCliente: body.idCliente,
            fecha: body.fecha,
            nombreProducto: body.nombreProducto,
            precio: body.precio,
            valorDescuento: body.valorDescuento,
            iva: body.iva,
            valorTotal: body.valorTotal
        }, { where: { id: id } });
    
    } catch (error) {
        throw new Error(`Error al actualizar el cliente: ${error.message}`);
    }
};

// Función para eliminar una factura por su ID
const deleteInvoice = async function (id) {
    try {
        const deletedCount = await Invoice.destroy({ where: { id } });
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
    getAllInvoice,
    getOneInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice
};
