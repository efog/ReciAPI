var url = require('url');

/**
 * Defines dispatcher object
 * @returns {Object} a dispatcher object
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
            this._posts[parsedUrl.pathname](req, res);
        }
        if (req.method === GET && this._gets[parsedUrl.pathname]) {
            this._gets[parsedUrl.pathname](req, res);
        }
    };

    /**
     * Defines a handler for a POST on resource name
     *
     * @param {any} resource name of resource
     * @param {any} callback used to handle the request
     * @returns {undefined}
     */
    this.onPost = (resource, callback) => {
        this._posts[resource] = callback;
    };

    /**
     * Defines a hander for a GET on resource name
     *
     * @param {any} resource resource url
     * @param {any} callback callback to handle request
     * @returns {undefined}
     */
    this.onGet = (resource, callback) => {
        this._gets[resource] = callback;
    };
}

module.exports = Dispatcher;