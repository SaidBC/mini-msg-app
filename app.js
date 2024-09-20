require('dotenv').config()
const express = require('express');
const ejs = require('ejs');
const path = require('node:path');
const router = require('./routes/router.js')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => {
    console.log('the app is listening at port ' + PORT);
})