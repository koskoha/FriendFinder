const express = require('express');
const bodyParser = require('body-parser');
const htmlRouters = require('./app/routing/htmlRouters.js');
const apiRouters = require('./app/routing/apiRouters.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', htmlRouters);
app.use('/api', apiRouters);


app.listen(PORT, () => {
    console.log('Listening on port 3000');
})