const dbConnector = require('mongoose');
const ENV = require('./config/config');

dbConnector.connect(`mongodb://${ENV.user}:${ENV.password}@localhost:${ENV.dbPort}/${ENV.db}?authSource=admin`, function(err, db) {
  if (err) {
    throw err;
  }
  console.log(`DB is running on port ${ENV.dbPort}`);
});

module.exports = dbConnector;