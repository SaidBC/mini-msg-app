const express = require('express');
const router = express.Router();
const { getAllMessages, sendMessage, getSendMessage, getMessageById } = require('../controllers/controller')



router.get('/', getAllMessages)
router.route('/messages/:id').get(getMessageById)
router.route('/new').post(sendMessage).get(getSendMessage)

module.exports = router