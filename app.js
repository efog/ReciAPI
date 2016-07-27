const port = 1337;

var http = require('http');
var Dispatcher = require('./dispatcher');
var formBodyParser = require('./form-body-parser');
var RecipeHandler = require('./recipeHandler');

var dispatcher = new Dispatcher();
var recipeHandler = new RecipeHandler();

dispatcher.onGet('/api/recipe', recipeHandler.get);
dispatcher.onPost('/api/recipe', recipeHandler.post, [formBodyParser.parse]);

var server = http.createServer(dispatcher.handleRequest);
server.listen(port, function () {
    console.log('Server started.');
});