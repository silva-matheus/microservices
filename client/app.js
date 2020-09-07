const Fastify = require('fastify');
const uuidv4 = require('uuid/v4');

// Create Request Ids for Log
const createRequestId = () => { return uuidv4(); };

// Create APP
const app = Fastify({
    ignoreTrailingSlash: true,
    logger: {
        genReqId: createRequestId,
        level: 'info'
    },
    bodyLimit: 20480
});

// Enable CORS
app.register(require('fastify-cors'));

// Enable Helmet
app.register(require('fastify-helmet'));

// Enable rate limit
app.register(require('fastify-rate-limit'), {
    max: 60,
    timeWindow: '1 minute'
});

// // Enable Body Parser
// app.register(require('body-parser').urlencoded());
// app.register(require('body-parser').json());

// // Prevent Parameter Pollution
// app.register(require('hpp'));

// Declaring Routes
app.register(require('./src/client.routes'), { prefix: '/api' })

app.setNotFoundHandler((request, reply) => {
    reply.code(404).type('application/json').send({
        status: 'failed',
        statusCode: 404,
        error: '404_route_not_found'
    });
});

module.exports = app;