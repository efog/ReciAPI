/**
 * Defines a requests form body parser
 *
 * @constructor
 */
function FormBodyParser() {

    /**
     * Parses body and extracts form data
     *
     * @param {object} req request object
     * @param {object} res response object
     * @param {object} next next method inline to call
     * @returns {undefined}
     */
    this.parse = (req, res, next) => {
        next(req, res);
    };
}
module.exports = new FormBodyParser();