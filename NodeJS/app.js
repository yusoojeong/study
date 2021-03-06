const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express : app
});

// 미들웨어 세팅
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('hello express');
});


app.use('/admin', admin);
app.use('/contacts', contacts);

app.listen(port, () => {
    console.log('Express listening on port', port);
});