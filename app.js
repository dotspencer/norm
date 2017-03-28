var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');

var keys = require('./src/config/keys.json');
var router = require('./src/config/routes.js');

var app = express();
app.listen('2323');

// Security
app.disable('x-powered-by');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

var sessionOptions = {
  secret: keys.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1209600000
  }
}
app.use(session(sessionOptions));

// Custom middleware
app.use(function(req, res, next){
  // TODO: Lookup session id to authenticate user
  // TODO: Set logged in variable
  console.log("Custom middleware :)");
  next();
});

app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Database
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
