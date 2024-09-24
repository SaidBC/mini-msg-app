const { Pool } = require('pg');
const main = require('./populate');

main()
module.exports = new Pool({
    connectionString: 'postgres://default:eXc2dogzTH4v@ep-green-bush-a4o8psv6.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'
})