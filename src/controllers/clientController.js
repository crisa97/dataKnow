const clientService = require('../services/clientService')

const getAllClients = async function(req, res) {
    try {
        // Obtener parámetros de consulta para paginación
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        // Asegúrate de que los valores de paginación sean válidos
        if (page < 1 || pageSize < 1) {
            return res.status(400).json({ status: 400, message: 'El número de página y el tamaño de página deben ser mayores que 0.' });
        }

        // Calcular valores de paginación
        const offset = (page - 1) * pageSize;
        const limit = pageSize;

        // Obtener clientes con paginación
        const { count, rows } = await clientService.getAllClients(limit, offset);

        return res.status(200).json({
            status: 200,
            message: 'Clientes:',
            data: rows,
            pagination: {
                page,
                pageSize,
                totalItems: count,
                totalPages: Math.ceil(count / pageSize),
            },
        });
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