/**
 * Defines Recipe API requests handler
 *
 * @constructor
 */
function RecipeHandler() {

    /**
     * Handles post request to Recipe API
     *
     * @param {any} req request object
     * @param {any} res response object
     * @returns {undefined}
     */
    this.post = (req, res) => {
        res.writeHead(200);
        res.end();
    };

    /**
     * Handles get request to Recipe API
     *
     * @param {any} req request object
     * @param {any} res response object
     * @returns {undefined}
     */
    this.get = (req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify({
            'message': 'hello world!'
        }));
        res.end();
    };
}

module.exports = RecipeHandler;