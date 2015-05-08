var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/formsubmit', function(req, res){
	console.log(req.body);
	var email=req.body.email;

	res.redirect('/success');
	// res.send('Success');
});

app.get('/success', function(req, res) {
	res.render('success');
});

var port = process.env.PORT || 6451;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
