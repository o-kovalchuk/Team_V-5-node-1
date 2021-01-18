const express = require('express');
const minimist = require('minimist');
const getDateUTC = require('./dateTimeFormat');

const app = express();
const PORT = process.env.PORT || 3000;

const argv = minimist(process.argv.slice(2));
const INTERVAL = argv['i'] ? argv['i'] : 500;
const TIMEOUT = argv['t'] ? argv['t'] : 2500;

const consoleLogger = (req, res, next) => {
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

app.use(consoleLogger);

app.get('/*', (req, res) => {
    setTimeout(() => {
        res.send(getDateUTC());
    }, TIMEOUT);
})

app.listen(PORT, () => console.log(`Starting\r\nServer is listening on ${PORT}`));