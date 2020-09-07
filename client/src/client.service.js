const Client = require('./client.model');

exports.findAll = async () => {
    return Client.find().then((docs) => {
        return {
            status: 'success',
            statusCode: 200,
            data: docs
        };
    }).catch((err) => {
        return {
            status: 'failed',
            statusCode: 400,
            error: err
        };
    });
}

exports.findOne = async (clientId) => {
    return Client.findById({_id: clientId}).then((docs) => {
        return {
            status: 'success',
            statusCode: 200,
            data: docs
        };
    }).catch((err) => {
        return {
            status: 'failed',
            statusCode: 400,
            error: err
        };
    });
}

exports.create = async (clientData) => {
    return Client.create(clientData).then((docs) => {
        return {
            status: 'success',
            statusCode: 201,
            data: docs
        };
    }).catch((err) => {
        return {
            status: 'failed',
            statusCode: 400,
            error: err
        };
    });
}

exports.update = async (clientId, clientData) => {
    return Client.findByIdAndUpdate({_id: clientId}, clientData, {new: true}).then((docs) => {
        return {
            status: 'success',
            statusCode: 201,
            data: docs
        };
    }).catch((err) => {
        return {
            status: 'failed',
            statusCode: 400,
            error: err
        };
    });
}   

exports.delete = async (clientId) => {
    return Client.findByIdAndDelete(clientId).then((docs) => {
        return {
            status: 'success',
            statusCode: 200,
            data: docs
        };
    }).catch((err) => {
        return {
            status: 'failed',
            statusCode: 400,
            error: err
        };
    });
}