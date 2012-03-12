
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set("view options", {layout: false});
  app.register('.html', require('ejs'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.home);
app.get('/home', routes.home);
app.get('/search', routes.search);
app.get('/product', routes.product);
app.get('/location', routes.location);
app.get('/*', routes.deadpage);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
