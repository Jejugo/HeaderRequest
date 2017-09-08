var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){



	app.get('/', function(req, res){
		var language = req.acceptsLanguages();

		res.json({
			ipaddress: req.ip,
			language: language[0],
			software: req.get('User-Agent')
		});
	});
}