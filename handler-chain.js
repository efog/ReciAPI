var model = module.exports;


/**
 * Returns chain method for index
 *
 * @param {any} idx index of helper to chain
 * @param {any} helpers helpers list
 * @param {any} handler handler terminating the chain
 * @returns {Object} execution chain node
 */
function getChainNode(idx, helpers, handler) {
    var helperIndex = idx;
    var currentHelper = helpers[idx];
    var hasNext = helpers[idx + 1];
    var nextHelper = hasNext ? getChainNode(++helperIndex, helpers, handler) : false;

    if (nextHelper) {
        return (req, res, next) => {
            var nxh = nextHelper;
            currentHelper(req, res, nextHelper);
        };
    }

    return (req, res) => {
        currentHelper(req, res, handler);
    };
}

/**
 * Returns an execution chain of helper methods ended by the handler
 *
 * @param {Array} helpers request helpers
 * @param {any} handler request handler
 * @returns {Object} chained helpers
 */
function chain(helpers, handler) {
    var hl = helpers.length;
    if (helpers.length === 0) {
        return handler;
    }
    var execChain = getChainNode(0, helpers, handler);

    return execChain;
}
model.chain = chain;
