const port = 1337;

var http = require('http');
var Dispatcher = require('./dispatcher');
var dispatcher = new Dispatcher();

dispatcher.onGet('/api/recipe', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write(JSON.stringify({
        'message': 'hello world!'
    }));
    res.end();
});

var server = http.createServer(dispatcher.handleRequest);
server.listen(port, function () {
    console.log('Server started.');
});