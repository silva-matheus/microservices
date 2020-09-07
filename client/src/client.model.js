const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please insert a product name']
    },
    address: {
        type: String,
        required: [true, 'Please insert an address']
    },
    phone: {
        type: String,
        required: [true, 'Please insert a value'],
        unique: true,
        validate: {
            validator: (v) => {
                return /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`,
        }
    },
    email: {
        type: String,
        required: [true, 'Please insert a valid e-mail'],
        unique: true,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid e-mail!`,
        }
    }
});

// productSchema.plugin(sanitize());

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;