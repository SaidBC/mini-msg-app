const messages = [
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


const getAllMessages = (req, res) => {
    res.render('index', { messages })
}
const getSendMessage = (req, res) => {
    res.render('new')
}
const sendMessage = (req, res) => {
    messages.push({ ...req.body, added: new Date() })
    res.redirect('/')
}
const getMessageById = (req, res) => {
    res.render('message', { messages, id: req.params.id })
}
module.exports = {
    getAllMessages, sendMessage, getSendMessage, getMessageById
}