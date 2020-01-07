var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json())
 
const db = require('./config/config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});

require('./routes/routes.js')(app);
 
// Create a Server
var server = app.listen(7500, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App listening at http://%s:%s", host, port)
})