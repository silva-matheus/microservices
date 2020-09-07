const Service = require('./client.service');
const sanitize = require('mongo-sanitize');
const logService = require('./log.service');

exports.findAll = async (request, reply, next) => {
    try {
        const clients = await Service.findAll();

        if (clients.status === 'failed') {
           return reply.code(500).send(clients);
        }

        logService.create({
            route: 'api/v1/client',
            type: 'GET',
            entity: 'Client'
        });

        return reply.code(200).send(clients);
    } catch (err) {
        return reply.code(500).send({
            status: 'failed',
            statusCode: 500,
            error: err
        });
    }
}

exports.findOne = async (request, reply, next) => {
    try {
        const client = await Service.findOne(sanitize(request.params.id));

        if (client.status === 'failed') {
            return reply.code(500).send({
                status: 'failed',
                error: err
            });
        }

        logService.create({
            route: `api/v1/client/${req.params.id}`,
            type: 'GET',
            entity: 'Client'
        }); 

        console.log(client);
        return reply.code(201).send(client);
    } catch (err) {
        return reply.code(500).send({
            status: 'failed',
            statusCode: 500,
            error: err
        });
    }
}

exports.create = async (request, reply, next) => {
    try {
        const cleanClientData = {
            name: sanitize(request.body.name),
            address: sanitize(request.body.address),
            email: sanitize(request.body.email),
            phone: sanitize(request.body.phone),
        };

        const client = await Service.create(cleanClientData);

        if (client.status === 'failed') {
            return reply.code(500).send(client);
        }

        logService.create({
            route: `api/v1/client/create`,
            type: 'POST',
            entity: 'Client'
        });

        return reply.code(201).send(client);
    } catch(err) {
        reply.code(500).send({
            status: 'failed',
            statusCode: 500,
            error: 'internal_server_error'
        });
    }
}

exports.update = async (request, reply, next) => {
    try {
        const cleanClientData = {
            ...(sanitize(request.body.name) && { name: sanitize(request.body.name) }),
            ...(sanitize(request.body.address) && { address: sanitize(request.body.address) }),
            ...(sanitize(request.body.email) && { email: sanitize(request.body.email) }),
            ...(sanitize(request.body.phone) && { phone: sanitize(request.body.phone) }),
        };

        console.log(cleanClientData);

        const client = await Service.update(sanitize(request.params.id), cleanClientData);

        console.log(client);
        if (client.status === 'failed') {
            return reply.code(500).send(client);
        }

        logService.create({
            route: `api/v1/client/${req.params.id}/update`,
            type: 'UPDATE',
            entity: 'Client'
        });

        return reply.code(201).send(client);
    } catch(err) {
        reply.code(500).send({
            status: 'failed',
            statusCode: 500,
            error: 'internal_server_error'
        });
    }
}

exports.delete = async (request, reply, next) => {
    try {

        const cleanClientId = sanitize(request.params.id);
        const client = await Service.delete(cleanClientId);

        logService.create({
            route: `api/v1/client/${req.params.id}/delete`,
            type: 'DELETE',
            entity: 'Client'
        });

        return reply.code(200).send({
            status: 'success',
            data: client
        });
    } catch(err) {
        reply.code(500).send({
            status: 'failed',
            statusCode: 500,
            error: 'internal_server_error'
        });
    }
}