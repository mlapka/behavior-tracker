
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var url = require('url');

var app = express();

// all environments
app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/edit', routes.edit);
app.get('/report', routes.report);


app.post('/edit', function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var query = parsedUrl.query;
    console.log(parsedUrl.pathname);
    if (parsedUrl.pathname == '/edit') {

        //TODO: call specific edit db functions

        console.log(req.body);
        var postData = req.body;
        console.log(postData["name"]);
        console.log(postData["value"]);

    }
    
    //send OK
    res.send(routes.edit(req, res));

    //reload edit page?
    
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
