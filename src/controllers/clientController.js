const clientService = require('../services/clientService')

const getAllClients =  (req, res) => {
    const  allClients = clientService.getAllClients()
    res.send("Get  all clients");
};

const getOneClients = (req, res) => {
    const oneclient = clientService.getOneClients(req.params.clientId)
    res.send(`Get client ${req.params.clientId}`);
};

const createClient = (req, res) => {
    const createClient = clientService.createClient(req.params.clientId)
    res.send(`Create client ${req.params.clientId}`);
};

const updateClient = (req, res) => {
    const updateClient = clientService.updateClient(req.params.clientId)
    res.send(`Update client ${req.params.clientId}`);
};

const deleteCliente = (req, res) => {
    clientService.deleteCliente(req.params.clientId)
    `Delere client ${req.params.clientId}`
};

module.exports = {
    getAllClients,
    getOneClients,
    createClient,
    updateClient,
    deleteCliente
};