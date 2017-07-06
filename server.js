let express = require('express'),
  app = express(),
  port = process.env.PORT || 10086,
  mongoose = require('mongoose'),
  Task = require('./api/models/nodeModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect = ('mongodb://localhost/Nodedb')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/nodeRoutes');
routes(app);

app.listen(port);

console.log(`node server started on: ${port}`);