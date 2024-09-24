require('dotenv').config();

const { Client } = require('pg');

const sql = `
CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY , message TEXT,username TEXT ,createdat BIGINT);
`;

const main = async () => {
    const client = new Client({
        connectionString: 'postgres://default:eXc2dogzTH4v@ep-green-bush-a4o8psv6.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require'
    })
    await client.connect();
    await client.query(sql);
    await client.end();
}
module.exports = main;
