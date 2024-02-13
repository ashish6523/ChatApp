

const Express = require('express');
const Router = Express.Router();

Router.get('/', (Request, Response) => {
    Response.send({
        Response: 'Backend Server'
    }).status(200);
});

module.exports = Router;