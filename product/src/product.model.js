const mongoose = require('mongoose');
const sanitize = require('express-mongo-sanitize')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please insert a product name']
    },
    value: {
        type: Number,
        required: [true, 'Please insert a value']
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide a quantity']
    }
});

// productSchema.plugin(sanitize());

const Product = mongoose.model('Product', productSchema);
module.exports = Product;