var express = require("express");
var bodyParser = require("body-parser");

var app;
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// Requiring our models for syncing
var db = require("./app/models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("./app/public"));

// Routes
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

// Syncing our sequelize models and then starting our Express app

// if (process.env.NODE_ENV !== 'test') {
// 	db.sequelize.sync({ force: true }).then(function () {
// 	  app.listen(PORT, function () {
// 	    console.log("App listening on PORT " + PORT);
// 	  });
// 	});
// }

if (process.env.JAWSDB_URL) {
	app.sequelize.sync(process.env.JAWSDB_URL);
} else {
	app.sequelize.sync({
		host: 'zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'f2cchicw9z1g1uru',
		password: 'hq72cyw7idh38i5a',
		database: 'es43okhstgyry1h9'
	});
};
app.sync();
module.exports = app;