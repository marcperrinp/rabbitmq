var express = require('express')
var app = express()
const eventEmitter = require('./src/eventEmitter');

app.post('/event', (req, res, next) => {
    eventEmitter.emit('FOREST_ADMIN_EVENT');
    res.sendStatus(204);
})

app.listen(3000);