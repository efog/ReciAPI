var Dispatcher = require('../dispatcher');
var http = require('http');

describe('dispatcher', function () {
    var server = null;
    var target = null;
    beforeEach(function () {
        target = new Dispatcher();
        server = http.createServer(target.handleRequest);
    });
    afterEach(function () {
    });
    it('should allow registering post to resource with handler', function () {
        var apiUrl = '/api/recipe';
        expect(target).toBeDefined();
        target.onPost(apiUrl, function (req, res) { });
        expect(target.posts[apiUrl]).toBeDefined();
    });
});