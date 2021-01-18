const express = require('express');
const app = express();
const port = 3000;

const myArgs = process.argv.slice(2);
const i = myArgs.indexOf('-i') !== -1 ? Number(myArgs[myArgs.indexOf('-i') + 1]) : 500;
const t = myArgs.indexOf('-t') !== -1 ? Number(myArgs[myArgs.indexOf('-t') + 1]) : 2500;

const getCurrentDateAndTime = () => {
    return new Date().toISOString().replace(/T/, ', ').replace(/\..+/, '');
};

const generateCurrentDateAndTime = (req, res, next) => {
    let deltaTime = i;
    const intervalID = setInterval(() => {
        const currentDateAndTime = getCurrentDateAndTime();
        if (deltaTime <= t) {
            console.log(currentDateAndTime);
            deltaTime = deltaTime + i;
        } else {
            clearInterval(intervalID);
        }
    }, i);
    next();
};

app.use(generateCurrentDateAndTime);

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send(getCurrentDateAndTime());
    }, t);
});

app.listen(port, () => {
    console.log('Starting');
    console.log(`Server is listening on ${port}`);
});
