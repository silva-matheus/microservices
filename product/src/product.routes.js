const express = require('express');
const router = express.Router();
const productController = require('./product.controller')
const { check, validationResult } = require('express-validator');

// Find ALL
router.get('/', productController.findAll);

// Find One Record by ID
router.get('/:id',[
    check('id').isString()
], productController.findOne);

// Create a new Product
router.post('/create', [
    check('name').isString(),
    check('value').isFloat(),
    check('quantity').isInt()
],productController.create);

// Update a product by ID
router.patch('/:id/update', [
    check('id').isString(),
    check('name').optional().isString(),
    check('value').optional().isFloat(),
    check('quantity').optional().isInt()
], productController.update)

// Find One Record by ID
router.delete('/:id/delete',[
    check('id').isString()
], productController.delete);

module.exports = router;

// Protect all routes after this middleware
// router.use(authController.protect);