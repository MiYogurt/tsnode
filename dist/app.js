// import http = require('http');
"use strict";
var http = require('http');
var App = (function () {
    function App() {
    }
    App.getServer = function () {
        console.log('get server instance');
        if (this.server === null) {
            this.server = http.createServer(function (request, response) {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Hello World\n');
            });
            return this.server;
        }
        return this.server;
    };
    App.server = null;
    return App;
}());
var server = App.getServer();
server.listen(3000);
console.log('server aleady runing in 3000 port');
//# sourceMappingURL=app.js.map