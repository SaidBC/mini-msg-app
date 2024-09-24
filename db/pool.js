const { Pool } = require('pg');
const main = require('./populate');

main()
module.exports = new Pool({
    connectionString: process.env.DATABASE_URL
})