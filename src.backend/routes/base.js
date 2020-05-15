const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
    res.send('Hello World');
});

export default homeRouter;