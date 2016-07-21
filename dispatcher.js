var url = require('url');

/**
 * Defines dispatcher object
 * @returns {Object} a dispatcher object
 */
function Dispatcher() {

    const POST = 'POST';
    const GET = 'GET';
    const PUT = 'PUT';
    const PATCH = 'PATCH';
    const DELETE = 'DELETE';

    this.posts = {};

    /**
     * Handles the http request
     *
     * @param {any} req request parameter object
     * @param {any} res response parameter object
     * @return {undefined}
     */
    function handleRequest(req, res) {
        var parsedUrl = url.parse(req.url);
        if (req.method === POST && this.posts[parsedUrl.pathname]) {
            this.posts[parsedUrl.pathname](req, res);
        }
    }

    /**
     * Defines a handler for a POST on resource name
     *
     * @param {any} resource name of resource
     * @param {any} callback used to handle the request
     * @returns {undefined}
     */
    function onPost(resource, callback) {
        this.posts[resource] = callback;
    }
    this.onPost = onPost;
}

module.exports = Dispatcher;