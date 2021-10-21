const config = require('config');
const { Pool } = require('pg');

const pool = new Pool({
  user: config.get('database.user'),
  host: config.get('database.host'),
  database: config.get('database.database'),
  password: config.get('database.password'),
  port: config.get('database.port'),
  ssl: {
    rejectUnauthorized: false
  } 
});

module.exports = pool;
