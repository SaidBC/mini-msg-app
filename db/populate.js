require('dotenv').config();

const { Client } = require('pg');

const sql = `
CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY , message TEXT,username TEXT ,createdat BIGINT);
`;

const main = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })
    await client.connect();
    await client.query(sql);
    await client.end();
}
module.exports = main;
