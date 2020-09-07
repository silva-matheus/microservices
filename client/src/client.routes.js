const schemas = require('./validation.schema');
const clientController= require('./client.controller');

module.exports = async (fastify, opts) => {
    fastify.get('/v1/client', clientController.findAll);
    fastify.get('/v1/client/:id', schemas.findOneSchema , clientController.findOne);
    fastify.post('/v1/client/create', schemas.createSchema, clientController.create);
    fastify.patch('/v1/client/:id/update', schemas.updateSchema, clientController.update);
    fastify.delete('/v1/client/:id', schemas.deleteSchema, clientController.delete);
}