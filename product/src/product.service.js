const mongoose = require('mongoose');
const Product = require('./product.model');
const sanitize = require('express-mongo-sanitize')

exports.create = async (productData) => {
    try {
        const cleanProduct = {
            name: productData.name
        };

        const product = await Product.create(productData);
        return {
            status: 'success',
            data: product
        };
    } catch (err) {
        return {
            status: 'failed',
            error: err
        };
    }
}

exports.findOne = async (productId) => {
    try {
        const product = await Product.findById(productId);

        return {
            status: 'success',
            data: product
        };
    } catch (err) {
        return {
            status: 'failed',
            error: err
        };
    }
}

exports.findAll = async () => {
    try {
        const products = await Product.find();
        
        return {
            status: 'success',
            data: products
        };
    } catch (err) {
        return {
            status: 'failed',
            error: err
        };
    }
}

exports.update = async (productId, productData) => {
    try {
        const product = await Product.findOneAndUpdate({_id: productId}, productData, {new: true});
        console.log(product);

        if (!product) {
            return {
                status: 'failed',
                error: 'id_not_exist'
            };
        }
        
        return {
            status: 'success',
            data: product
        };
    } catch (err) {
        return {
            status: 'failed',
            error: err
        };
    }
}   

exports.delete = async (productId) => {
    try {
        const product = await Product.findByIdAndDelete(productId);
        return product;
        
    } catch (err) {
        return {
            status: 'failed',
            error: err
        };
    }
}