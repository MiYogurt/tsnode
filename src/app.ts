// import http = require('http');

import * as http from 'http';

class App {
    private static server : http.Server = null;

    private constructor(){

    }

    static getServer() : any{
        console.log('get server instance');
        if(this.server === null){
            this.server = http.createServer((request, response) => {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Hello World\n');
            });
            return this.server;
        }

        return this.server;
    }
}


const server : http.Server = App.getServer()

server.listen(3000);

console.log('server aleady runing in 3000 port');