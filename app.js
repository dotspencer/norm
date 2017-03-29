var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var keys = require('./src/config/keys.json');
var router = require('./src/config/routes.js');
var authMiddleware = require('./src/middleware/authMiddleware.js');

var app = express();
app.listen('2323');

// Security
app.disable('x-powered-by');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Database
var mysql = require('mysql');
app.locals.db = mysql.createConnection({
  host     : 'localhost',
  user     : keys.mysql.username,
  password : keys.mysql.password,
  database : 'norm'
});
app.locals.db.connect();

// Sessions
var sessionOptions = {
  secret: keys.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1209600000
  }
}
app.use(session(sessionOptions));

// Session Store
var options = {
    host: 'localhost',
    port: 3306,
    user: keys.mysql.username,
    password: keys.mysql.password,
    database: 'norm'
};
var connection = mysql.createConnection(options); // or mysql.createPool(options);
var sessionStore = new MySQLStore({}/* session store options */, connection);

// Authentication
app.use(authMiddleware);

// Helpers
app.locals.staticHelper = require('./src/helpers/staticHelper.js');

// Routes
app.set('views', 'src/views');
app.set('view engine', 'ejs');
router(app);
