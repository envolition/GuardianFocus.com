var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',function(req, res){
	res.render('index',{title: 'hello from ...'});
});

app.get('/download', function(req, res){
	res.send('Hello Download');
});

app.listen(5000, function(err){

	console.log('running server on port '+ port);
});
