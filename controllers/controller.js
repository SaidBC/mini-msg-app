let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]
const db = require('../db/queries')

const getAllMessages = async (req, res) => {
    messages = await db.getMessages();
    res.render('index', { messages })
}
const getSendMessage = (req, res) => {
    res.render('new')
}
const sendMessage = async (req, res) => {
    await db.createMessage({ ...req.body, createdat: new Date().getTime() })
    res.redirect('/')
}
const getMessageById = (req, res) => {
    res.render('message', { messages, id: req.params.id })
}
module.exports = {
    getAllMessages, sendMessage, getSendMessage, getMessageById
}