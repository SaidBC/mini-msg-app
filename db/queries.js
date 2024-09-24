const pool = require('./pool');


const createMessage = async (data) => {
    await pool.query('INSERT INTO messages (message,username,createdat) VALUES ($1,$2,$3)', [data.message, data.username, data.createdat])
}
const getMessages = async () => {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

module.exports = {
    getMessages,
    createMessage
}