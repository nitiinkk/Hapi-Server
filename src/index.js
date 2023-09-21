'use strict'

const Hapi = require("@hapi/hapi");
const Server = require("@hapi/hapi").Server;
require('dotenv').config();

const init = async () => {
    const server = new Server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0'
    });
    console.log(server);


    //setting up server Routes
    server.route({
        method: 'GET',
        path: '/welcome',
        handler: (request, h) => {
            return 'hello world';
        }
    });

    await server.start();
    console.error('Server running on %s', server.info.uri);
} 

process.on('unhandledRejection', (err) => {
    console.log('Caught unhandledRejection', err);
    process.exit(1);
})


init();