const app = require('./app');
const dbConnector = require('./db');

app.listen(process.env.PORT || 3003, () => {
    console.log(`Application is running on port ${process.env.PORT ? process.env.PORT : 3003}`);
});