const app = require('./app');
const dbConnector = require('./db');
const producer = require('./kafka');

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application is running on port ${process.env.PORT ? process.env.PORT : 3000}`);
});