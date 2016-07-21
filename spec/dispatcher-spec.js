var Dispatcher = require('../dispatcher');
var http = require('http');
const port = 1337;

describe('dispatcher', function () {
    var server = null;
    var target = null;
    beforeEach(function () {
        target = new Dispatcher();
        server = http.createServer(target.handleRequest);
        server.listen(port, function () {
            console.log('test server started');
        });
    });
    afterEach(function () {
        server.close();
        console.log('test server stopped');
    });
    it('should allow registering post to resource with handler', function () {
        expect(Dispatcher).toBeDefined();
        target.onPost('/api/recipe', function (req, res) {

        });
    });
});