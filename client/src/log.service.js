const producer = require('../kafka');

exports.create = async (logData) => {
    try {
        await producer.connect();

        await producer.send({
            topic: 'create-log',
            messages: [
                {
                    value: JSON.stringify(logData)
                }
            ]
        })
        .then(() => {
            producer.disconnect()
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
    } catch (err) {
        producer.disconnect();
        return {
            status: 'failed',
            error: err
        };
    }
}