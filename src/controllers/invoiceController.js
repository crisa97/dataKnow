const invoiceService = require('../services/invoiceService')

const getAllInvoice = async  function(req, res) {
    try {
        const allInvoice = await invoiceService.getAllInvoice();
        return res.status(200).json({ status: 200,  message: 'Facturas:', data: allInvoice });
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al obtener los facturas.', error: error.message });
    }
};

const getOneInvoice = async function(req, res){
    try {
        const invoice  = await invoiceService.getOneInvoice(req.params.id)
        if (invoice ) {
            return res.status(200).json({ status: 200, message: 'facturas por id:', data: invoice  });
        } else {
            return res.status(404).json({ status: 404, message: 'Factura no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al obtener el cliente por ID.', error: error.message });
    }
}

const createInvoice = async function(req, res) {
    try {
        const createdInvoice = await invoiceService.createInvoice(req.body);
        return res.status(201).json({ status: 201, message: 'Factura creado satisfactoriamente', data: createdInvoice });
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al crear el cliente.', error: error.message });
    }
};

const updateInvoice = async function(req, res) {
    try {
        const idInvoice = req.params.id; 
        if (idInvoice) {
            const updatedInvoice = await invoiceService.updateInvoice(idInvoice, req.body);
            return res.status(200).json({ status: 200, message: 'Factura actualizado satisfactoriamente', data: updatedInvoice });
        } else {
            return res.status(404).json({ status: 404, message: 'Factura no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al actualizar el cliente.', error: error.message });
    }
};


const deleteInvoice = async function(req, res) {
    try {
        const deletedInvoice = await invoiceService.deleteInvoice(req.params.id);
        if (deletedInvoice) {
            return res.status(200).json({ status: 200, message: 'Factura eliminado satisfactoriamente', data: deletedInvoice });
        } else {
            return res.status(404).json({ status: 404, message: 'Factura no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al eliminar el cliente.', error: error.message });
    }
};

module.exports = {
    getAllInvoice,
    getOneInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice
};