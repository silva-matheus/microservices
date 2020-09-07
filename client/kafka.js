const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'product',
    brokers: ['localhost: 9092'],
    retry: {
        initialRetryTime: 150,
        retries: 10
    }
});

const producer = kafka.producer();

module.exports = producer;