var handlerChain = require('../handler-chain');

describe('handler chain', () => {
    it('should chain helpers and end with handler', () => {
        expect(handlerChain).toBeDefined();
        expect(handlerChain.chain).toBeDefined();

        var request = {};
        var response = {};

        var hasRunHandler = false;
        var handler = (req, res) => {
            hasRunHandler = true;
        };

        var helperA = (req, res, next) => {
            request.handlerA = {};
            next();
        };

        var helperB = (req, res, next) => {
            request.handlerB = {};
            next();
        };

        var helpers = [helperA, helperB];
        var chain = handlerChain.chain(helpers, handler);

        chain(request, response);
        expect(hasRunHandler).toBeTruthy();
        expect(request.handlerA).toBeDefined();
        expect(request.handlerB).toBeDefined();

    });
});
