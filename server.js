const express = require('express');
const bodyParser = require('body-parser');
const htmlRouters = require('./app/routing/htmlRouters.js');
const apiRouters = require('./app/routing/apiRouters.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', htmlRouters);
app.use('/api', apiRouters);


app.listen(3000, () => {
    console.log('Listening on port 3000');
})