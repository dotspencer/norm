var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var router = require('./src/config/routes.js');
var bodyParser = require('body-parser');

var app = express();
app.listen('2323');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Helpers
app.locals.staticHelper = require('./src/helpers/staticHelper.js');

// Routes
router(app);
