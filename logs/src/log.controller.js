const Service = require('./log.service');
const { Kafka } = require('kafkajs');

exports.findAll = async (req, res, next) => {
    try {
        const logs = await Service.findAll();
        console.log(logs);

        res.status(200).send(logs);
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            error: 'internal_server_error'
        });
        next(err);
    }
}

const kafka = new Kafka({
    clientId: 'log',
    brokers: ['localhost: 9092'],
    retry: {
        initialRetryTime: 100,
        retries: 10
    }
});

const consumer = kafka.consumer({ groupId: 'log-consumer' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({
        topic: 'create-log',
        fromBeginning: true,
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const log = JSON.parse(message.value.toString());

            console.log({
                topic,
                partition,
                message: log,
            });

            const createdLog = await Service.create({
                entity: log.entity,
                route: log.route,
                type: log.type,
            });

            console.log(createdLog);
        },
         
    });
}
run().catch(console.log("Erro"));