const Log = require('./log.model');

exports.create = async (logData) => {
    try {
        const log = await Log.create(logData);
        return {
            status: 'success',
            data: log
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
        const logs = await Log.find();
        
        return {
            status: 'success',
            data: logs
        };
    } catch (err) {
        return {
            status: 'failed',
            error: err
        };
    }
}

