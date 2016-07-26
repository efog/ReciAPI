const port = 1337;

var http = require('http');
var Dispatcher = require('./dispatcher');
var RecipeHandler = require('./recipeHandler');

var dispatcher = new Dispatcher();
var recipeHandler = new RecipeHandler();

dispatcher.onGet('/api/recipe', recipeHandler.get);
dispatcher.onPost('/api/recipe', recipeHandler.post);

var server = http.createServer(dispatcher.handleRequest);
server.listen(port, function () {
    console.log('Server started.');
});