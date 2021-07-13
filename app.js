/*
 * title: Local CDN
 * author: rafi0x
 * description: practice project
 * date: 07-13-2021
 */

// dependencies
const express = require('express');
const morgan = require('morgan');
const routez = require('./cdn/cdnRoute');

// main app
const app = express();

// middleware
app.use(morgan('dev'));


// main index route
app.get('/', (req, res) => {
    res.send('nothing here, goto /cdn');
})

// the CDN route
app.use('/cdn', routez);

// server
app.listen(4000, () => console.log('cdn server on 4000'));
