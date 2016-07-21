const port = 1337;

var http = require('http');

/**
 * Handles request to http server
 * @param {Object} req request definition
 * @param {Object} res response definition
 * @return {undefined} nothing
 */
function handleRequest(req, res) {
    res.end('hello world');
}

var server = http.createServer(handleRequest);
server.listen(port, function () {
    console.log('Server started.');
});