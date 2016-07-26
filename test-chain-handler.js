var handlerChain = require('./handler-chain');

var request = {};
var response = {};

var hasRunHandler = false;
var handler = (req, res) => {
    hasRunHandler = true;
    console.log('handler');
};

var helperA = (req, res, next) => {
    console.log('a');
    next();
};

var helperB = (req, res, next) => {
    console.log('b');
    next();
};

var helpers = [helperA, helperB];
var chain = handlerChain.chain(helpers, handler);

chain(request, response);