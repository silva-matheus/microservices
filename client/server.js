const app = require('./app');
const dbConnector = require('./db');
const producer = require('./kafka');

app.listen(process.env.PORT || 3001, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }

    app.log.info(`Server up on ${address}`);
});