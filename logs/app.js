'use strict';

const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./src/log.routes');
// const logger = require('./utils/logger')
const serverErrorHandler = require('./utils/serverErrorHandler');

// Load Express
const app = express();

// Enabling CORS
app.use(cors());

// Enabling Helmet
app.use(helmet());

// Enabling and Configuring Rate Limit
app.use('/api', rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'request_limit_exceeded'
}));

// Body Parser - Limiting the size of the req.body element
app.use(express.json({
    limit: '15kb',
}));

// Cookie Parser
app.use(cookieParser());

// Prevent Parameter Pollution
app.use(hpp());

// Enablle Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
// To remove data, use:
app.use(mongoSanitize());

// Declaring the routes
app.use('/api/v1/logs', routes);

// 404 Error for Undefined Routes
app.use('*', function(req, res, next) {
    const err = new serverErrorHandler(404, 'fail', 'page_not_found');
    next(err, req, res, next);
});

module.exports = app;
