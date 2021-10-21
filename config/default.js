const path = require('path');

let project_path = path.join(__dirname, '..');
let env_path = path.join(project_path, '.env');

require('dotenv').config({ path: env_path });

module.exports = {
  database: {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  sendgrid: {
    url: process.env.SENDGRID_URL,
    apiKey: process.env.SENDGRID_API_KEY
  },
  documentPath: path.join(project_path, 'documents')
}