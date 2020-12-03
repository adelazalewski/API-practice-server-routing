const express = require('express');

const racesRoutes = require('./races/racesRoute');
const villansRouter = require('./villans/villansRoute');

const server = express();


server.use('/races', racesRoutes);
server.use('/villans', villansRouter);

server.get('/', (req, res) => {
    res.status(200).send("hello from express");
});

server.listen(8000, () => {
    console.log(`magic happening on port 8000`);
})