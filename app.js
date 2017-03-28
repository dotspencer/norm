var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');

var keys = require('./src/config/keys.json');
var router = require('./src/config/routes.js');

var app = express();
app.listen('2323');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: keys.secret, resave: false, saveUninitialized: true}));
app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

// mysql
var mysql = require('mysql');
app.locals.db = mysql.createConnection({
  host     : 'localhost',
  user     : keys.mysql.username,
  password : keys.mysql.password,
  database : 'norm'
});
app.locals.db.connect();

// Helpers
app.locals.staticHelper = require('./src/helpers/staticHelper.js');

// Routes
router(app);
