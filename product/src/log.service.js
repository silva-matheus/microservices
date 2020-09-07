const producer = require('../kafka');

exports.create = async (logData) => {

    try {
        await producer.connect();
        console.log('Log Service');

        await producer.send({
            topic: 'create-log',
            messages: [
                {
                    value: JSON.stringify(logData)
                }
            ]
        })
        .then(() => {
            console.log('Created Log');
            producer.disconnect()
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
    } catch (err) {
        console.log('Error Catch');
        producer.disconnect();
        return {
            status: 'failed',
            error: err
        };
    }
}