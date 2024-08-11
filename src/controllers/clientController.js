const clientService = require('../services/clientService')

const getAllClients = async  function(req, res) {
    try {
        const allClients = await clientService.getAllClients();
        return res.status(200).json({ status: 200,  message: 'Clientes:', data: allClients });
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al obtener los clientes.', error: error.message });
    }
};

const getOneClients = async function(req, res){
    try {
        const client  = await clientService.getOneClient(req.params.id)
        if (client ) {
            return res.status(200).json({ status: 200, message: 'clientes por id:', data: client  });
        } else {
            return res.status(404).json({ status: 404, message: 'Cliente no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al obtener el cliente por ID.', error: error.message });
    }
}

const createClient = async function(req, res) {
    try {
        const createdClient = await clientService.createClient(req.body);
        return res.status(201).json({ status: 201, message: 'Cliente creado satisfactoriamente', data: createdClient });
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al crear el cliente.', error: error.message });
    }
};

const updateClient = async function(req, res) {
    try {
        const idCliente = req.params.id; 
        if (idCliente) {
            const updatedClient = await clientService.updateClient(idCliente, req.body);
            return res.status(200).json({ status: 200, message: 'Cliente actualizado satisfactoriamente', data: updatedClient });
        } else {
            return res.status(404).json({ status: 404, message: 'Cliente no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al actualizar el cliente.', error: error.message });
    }
};


const deleteCliente = async function(req, res) {
    try {
        const deletedClient = await clientService.deleteCliente(req.params.id);
        if (deletedClient) {
            return res.status(200).json({ status: 200, message: 'Cliente eliminado satisfactoriamente', data: deletedClient });
        } else {
            return res.status(404).json({ status: 404, message: 'Cliente no encontrado.' });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Error al eliminar el cliente.', error: error.message });
    }
};

module.exports = {
    getAllClients,
    getOneClients,
    createClient,
    updateClient,
    deleteCliente
};