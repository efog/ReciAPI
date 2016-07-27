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
        req.formData = null;
        if (req.data) {
            var serializedData = req.data.toString();
            console.log("Received body data: %s", serializedData);
            var data = {};
            serializedData.split('&').forEach(function (element) {
                var equalSplit = element.split('=');
                data[decodeURIComponent(equalSplit[0])] = decodeURIComponent(equalSplit[1]);
            });
            req.formData = data;
        }
        next(req, res);
    };
}
module.exports = new FormBodyParser();