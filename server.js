const express = require('express');
const minimist = require('minimist');
const getDateUTC = require('./date');

const app = express();
const PORT = process.env.PORT || 3000;

const argv = minimist(process.argv);
const INTERVAL = argv['i'];
const TIMEOUT = argv['t'];

const myLogger = (req, res, next) => {
    const intervalHandler = setInterval(() => {
        console.log(getDateUTC());
    }, INTERVAL);
    setTimeout(() => {
        if (intervalHandler) {
            clearInterval(intervalHandler);
        }
    }, TIMEOUT);
    next();
};

app.use(myLogger);

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send(getDateUTC());
    }, TIMEOUT);
})

app.listen(PORT, () => console.log(`Starting\r\nServer is listening on ${PORT}`));