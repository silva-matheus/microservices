const Service = require('./product.service');
const { check, validationResult } = require('express-validator');
const logService = require('./log.service');


exports.findAll = async (req, res, next) => {
    try {
        const products = await Service.findAll();
        console.log(products);

        logService.create({
            route: 'api/v1/product',
            type: 'GET',
            entity: 'Product'
        });

        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            error: 'internal_server_error'
        });
        next(err);
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("error")
            return res.status(422).json({ errors: errors.array() });
        }

        const product = await Service.findOne(req.params.id);
        logService.create({
            route: `api/v1/product/${req.params.id}`,
            type: 'GET',
            entity: 'Product'
        });
        return res.status(200).send(product);
    } catch (err) {
        res.status(500).send({
            status: 'failed',
            error: 'internal_server_error'
        });
        next(err);
    }
}

exports.create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("error")
            return res.status(422).json({ errors: errors.array() });
        }

        const product = await Service.create(req.body);
        
        logService.create({
            route: `api/v1/product/create`,
            type: 'POST',
            entity: 'Product'
        });

        return res.status(201).send(product);
    } catch(err) {
        res.status(500).send({
            status: 'failed',
            error: 'internal_server_error'
        });
        next(err);
    }
}

exports.update = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("error")
            return res.status(422).json({ errors: errors.array() });
        }

        const product = await Service.update(req.params.id, req.body);

        logService.create({
            route: `api/v1/product/${req.params.id}/update`,
            type: 'UPDATE',
            entity: 'Product'
        });

        return res.status(product.status === 'success' ? 200 : 404).send(product);
    } catch(err) {
        res.status(500).send({
            status: 'failed',
            error: 'internal_server_error'
        });
        next(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const product = await Service.delete(req.params.id);

        logService.create({
            route: `api/v1/product/${req.params.id}/delete`,
            type: 'DELETE',
            entity: 'Product'
        });
        
        if (product === null) {
            return res.status(404).send({
                status: 'failed',
                error: 'entity_not_found'
            });
        }

        return res.status(200).send({
            status: 'success',
            data: product
        });
    } catch(err) {
        res.status(500).send({
            status: 'failed',
            error: 'internal_server_error'
        });
        next(err);
    }
}