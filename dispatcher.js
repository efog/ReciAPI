var url = require('url');
var handlerChain = require('./handler-chain');

/**
 * Defines dispatcher object
 *
 * @constructor
 */
function Dispatcher() {

    const DELETE = 'DELETE',
        GET = 'GET',
        PATCH = 'PATCH',
        POST = 'POST',
        PUT = 'PUT';

    this._posts = {};
    this._gets = {};

    Object.defineProperty(this, 'posts', {
        'get': function () {
            return this._posts;
        }
    });
    Object.defineProperty(this, 'gets', {
        'get': function () {
            return this._gets;
        }
    });

    /**
     * Handles the http request
     *
     * @param {any} req request parameter object
     * @param {any} res response parameter object
     * @return {undefined}
     */
    this.handleRequest = (req, res) => {
        var parsedUrl = url.parse(req.url);
        if (req.method === POST && this._posts[parsedUrl.pathname]) {
            this.handlePost(this._posts[parsedUrl.pathname], req, res);
        }
        else if (req.method === GET && this._gets[parsedUrl.pathname]) {
            this._gets[parsedUrl.pathname](req, res);
        }
        else {
            res.writeHead(404,
                {
                    'Content-Type': 'text/plain'
                });
            res.write('Not found');
            res.end();
        }
    };

    /**
     * Handles POST requests
     *
     * @param {object} post POST handler
     * @param {object} req request object
     * @param {object} res response object
     * @returns {undefined}
     */
    this.handlePost = (post, req, res) => {
        var parsedUrl = url.parse(req.url);
        var handler = this._posts[parsedUrl.pathname];
        handler.callback(req, res);
    };

    /**
     * Defines a handler for a POST on resource name
     *
     * @param {string} resource name of resource
     * @param {object} callback used to handle the request
     * @param {array} helpers stack
     * @returns {undefined}
     */
    this.onPost = (resource, callback, helpers) => {
        this._posts[resource] = {
            'callback': callback,
            'helpers': helpers
        };
    };

    /**
     * Defines a hander for a GET on resource name
     *
     * @param {string} resource resource url
     * @param {object} callback callback to handle request
     * @returns {undefined}
     */
    this.onGet = (resource, callback) => {
        this._gets[resource] = callback;
    };
}

module.exports = Dispatcher;