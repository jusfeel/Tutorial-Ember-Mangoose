var express = require("express"), app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emberData');


app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(cors());

app.use('/', router);
require('./app/routes')(router);

app.listen(4500);
console.log("Node server running on http://localhost:4500");

exports = module.exports = app;
